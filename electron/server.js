'use strict';
( function () {

    const express = require( 'express' ),
        isDev = require( 'electron-is-dev' ),
        path = require( 'path' ),
        app = express();



    if ( isDev ) {

        app.use( express.static( path.join( __dirname, '../public' ) ) );
    } else {
        app.use( express.static( path.join( __dirname, '../../build' ) ) );
    }



    app.listen( 65333, ( error ) => {

    } )


    module.exports = app;
}() )