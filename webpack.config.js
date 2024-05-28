const path = require('path');

module.exports = {
  entry: './firebase.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
