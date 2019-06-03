const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}