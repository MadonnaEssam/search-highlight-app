const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style/main.scss";
        `
      }
    }
  },
})
