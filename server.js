let express = require( 'express' ),
  path = require( 'path' ),
  app = express();



app.use( express.static( path.join( __dirname + '/build' ) ) );


app.get( '/hello', ( req, res ) => {
  res.sendfile( 'build/index.html' );
} );


app.listen( 8080 )
