module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.css$/, 
        use: ['style-loader', 'css-loader?minimize'],
      }
    ]
  }
}