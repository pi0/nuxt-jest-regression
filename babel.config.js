module.exports = function (api) {
  if (api.env('test')) {
    return {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
  return {}
}
