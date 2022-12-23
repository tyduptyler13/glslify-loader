module.exports = {
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      }
    ]
  }
}
