const { build, loadNuxt } = require('nuxt')

test('init', async () => {
  const nuxt = await loadNuxt({ for: 'build' })
  await build(nuxt)
})
