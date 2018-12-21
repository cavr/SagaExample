const express = require( 'express' );
const path = require( 'path' );
const { app, server } = require('./server');

app.use( express.static( path.join( __dirname, '../build' ) ) );

app.get( '/*', function ( request, response ) {
    response.sendFile( path.join( __dirname, '../build', 'index.html' ) );
} );

const port = process.env.PORT || 3000


app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port} ${server.graphqlPath}`),
);