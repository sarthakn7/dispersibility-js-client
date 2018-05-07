var path = require('path');

module.exports = {
  entry: './src/dispersibility_client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dispClient.js',
    library: 'dispClient'
  }
};