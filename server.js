const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const publicPath = '/';

const distDir = path.join(__dirname, 'dist');
const configDir = path.join(__dirname, 'src/config');
const websiteDir = path.join(__dirname, 'src/website');
const app = express();

app.use(publicPath, express.static(configDir));
app.use(publicPath, express.static(websiteDir));
app.use(publicPath, express.static(distDir));

app.listen(port, function () {
  console.log(`App listening on: http://localhost:${port}`);
});
