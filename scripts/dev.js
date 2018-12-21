process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const express = require( 'express' );
const path = require( 'path' );
const webpack = require( 'webpack' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackConfig = require( '../config/webpack.config.dev' );
const compiler = webpack( webpackConfig );
const { app, server } = require( './server' );
app.use( webpackDevMiddleware( compiler ) );

app.use( express.static( __dirname + '/public' ) );

app.use( '/*', ( req, res, next ) => {
  const filename = path.resolve( compiler.outputPath, 'index.html' );
  compiler.outputFileSystem.readFile( filename, ( err, result ) => {
    if ( err ) {
      return next( err );
    }
    res.set( 'content-type', 'text/html' );
    res.send( result );
    res.end();
  } );
} );


const port = 4099;


app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port} ${server.graphqlPath}`),
);