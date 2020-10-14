const electron = require( 'electron' )
const app = electron.app
const ipcMain = electron.ipcMain

const BrowserWindow = electron.BrowserWindow
const isDev = require( 'electron-is-dev' );
const url = require( 'url' );
require( 'electron-reload' );
const path = require( 'path' );
const server = require( './server' );


let opsys = process.platform;



let bounceid = 34343;

let mainWindow

function createWindow () {

    if ( isDev ) {
        mainWindow = new BrowserWindow( { title: 'TeleCMI', resizable: false, maximizable: false, width: 800, height: 750, webPreferences: { nodeIntegration: true } } )
    } else {
        mainWindow = new BrowserWindow( { title: 'TeleCMI', resizable: false, maximizable: false, width: 400, height: 750, webPreferences: { nodeIntegration: true } } )
    }

    const ses = mainWindow.webContents.session
    mainWindow.on( 'focus', () => {
        app.dock.setBadge( '' )
        mainWindow.flashFrame( false )
        mainWindow.webContents.send( "fromMain", { event: 'app', status: 'focus' } );
    } )

    mainWindow.on( 'blur', () => {
        mainWindow.webContents.send( "fromMain", { event: 'app', status: 'blur' } );
    } )

    mainWindow.on( 'minimize', ( e ) => {

        mainWindow.webContents.send( "fromMain", { event: 'app', status: 'blur' } );
    } );


    if ( isDev ) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : url.format( {
                pathname: path.join( __dirname, '../index.html' ),
                protocol: 'file:',
                slashes: true,
            } )
    )
    mainWindow.on( 'closed', () => {


        mainWindow = null;
    } )


}

/*else if ( opsys == "win32" || opsys == "win64" ) {
    opsys = "Windows";
} else if ( opsys == "linux" ) {
    opsys = "Linux";
}*/


ipcMain.on( "setBadge", ( event, args ) => {

    if ( opsys == "darwin" ) {
        app.dock.setBadge( 'C' )
    }



} );

ipcMain.on( "openBounce", ( event, args ) => {


    if ( opsys == "darwin" ) {

        bounceid = app.dock.bounce( 'critical' )
    }

    if ( opsys == "win32" || opsys == "win64" ) {
        mainWindow.flashFrame( true )
    }



} );


ipcMain.on( "closeBounce", ( event, args ) => {
    if ( opsys == "darwin" ) {

        app.dock.cancelBounce( bounceid || 123456 )
    }
} );





app.on( 'ready', createWindow )

app.on( 'window-all-closed', () => {
    if ( process.platform !== 'darwin' ) {
        app.quit()
    }
} )

app.on( 'activate', () => {
    if ( mainWindow === null ) {
        createWindow()
    }
} )
