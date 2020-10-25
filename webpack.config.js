const path = require('path')

module.exports = {
  resolve: {
    alias: {
      extensions: ['.js', '.vue', '.json'],
      '@': path.resolve(__dirname, 'src'),
    }
  }
}
