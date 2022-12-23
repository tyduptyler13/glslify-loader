const webpack = require('./utils/readWebpack')

describe('Test', () => {
    test('simple glsl file with local & external dependencies', async () => {
        let data = await webpack('config-simple.js', 'entry-simple.js')
        expect(data.indexOf('#define GLSLIFY 1')).toBeTruthy() // '#define GLSLIFY 1 was added'
        expect(data.indexOf('GLSL textureless classic 2D noise "cnoise"')).toBeTruthy() // 'node module glsl-noise was included'
        expect(data.indexOf('cnoise(')).toBeTruthy() // 'cnoise was not renamed'
        expect(data.indexOf('vec3 hello =')).toBeTruthy() // 'local dependency shader-export.glsl was included'
    })

    test('glslify-loader using a transform option (glslify-fancy-imports)', async () => {
        let data = await webpack('config-transform.js', 'entry-transform.js')
        expect(data.indexOf('vec3 hello =')).toBeTruthy() // 'local dependency shader-export.glsl was included'
    })

    test('glslify-loader using post transforms (glslify-hex)', async () => {
        let data = await webpack('config-post.js', 'entry-post.js')
        expect(data.indexOf('#00FF00')).toBe(-1) // '#00FF00 transformed away with glslify-hex'
    })

    test('inline use', async () => {
        let data = await webpack('config-inline.js', 'entry-inline.js')
        expect(data.indexOf('#define GLSLIFY 1')).toBeTruthy() // '#define GLSLIFY 1 was added'
        expect(data.indexOf('GLSL textureless classic 2D noise "cnoise"')).toBeTruthy() // 'node module glsl-noise was included'
    })
})
