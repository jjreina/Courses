let express = require('express');
let path = require('path');
let compression = require('compression');

const app = express();
const publicPath = path.resolve(__dirname, '../dist');

app.use(compression());
app.use(express.static(publicPath));

app.listen(process.env.port || 3000, () =>
  console.log('Now listening for request')
);