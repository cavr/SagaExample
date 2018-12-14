
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../config/webpack.config.dev');
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));

app.use(express.static(__dirname + '/public'));

app.use('/*', (req, res, next) => {
    const filename = path.resolve(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });





app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
});