# glslify-loader

[glslify](http://github.com/stackgl/glslify) loader module for [webpack](http://webpack.github.io/).

## Installation
```sh
npm install glslify-loader
```

Generally, you'll want to use this alongside webpack's `'asset/source'` type:
```sh
type: 'asset/source'
```

## Usage

[Documentation: Using Loaders in Webpack](https://webpack.js.org/concepts/loaders/#configuration)

##### Configuration file

```js
module.exports = {
  rules: [
    {
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        'glslify-loader'
      ],
      type: 'asset/source'
    }
  ]
}
```

##### Inline

See the official webpack documentation: https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax

##### Speficy source transforms
See [Glslify Source Transforms](https://github.com/glslify/glslify#source-transforms) for details.

```js
module.exports = {
  rules: [
    {
      test: /\.(glsl|frag|vert)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'glslify-loader',
          options: {
            transform: [
              ['glslify-hex', { 'option-1': true, 'option-2': 42 }]
            ]
          }
        }
      ],
      type: 'asset/source'
    }
  ]
}
```


## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## License

MIT. See [LICENSE.md](http://github.com/stackgl/glslify-loader/blob/master/LICENSE.md) for details.
