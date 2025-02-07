const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    bundle: [path.join(__dirname, 'entry.js')],
  },
  output: {
    path: __dirname,
    publicPath: '',
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.(glsl|frag|vert)$/,
      exclude: [/node_modules/],
      use: [
        path.resolve(__dirname, '..', 'glslify-loader.js')
      ],
      type: 'asset/source'
    }]
  }
}
