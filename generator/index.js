module.exports = (api, options, rootOptions) => {

  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
  });

  api.extendPackage({
    dependencies: {
      "axios": "^0.21.1",
      "core-js": "^3.6.5",
      "rxjs": "6.6.7",
      "vue": "^3.0.0",
      "vue-router": "^4.0.0-0"
    },
    devDependencies: {
      "@typescript-eslint/eslint-plugin": "^4.18.0",
      "@typescript-eslint/parser": "^4.18.0",
      "@vue/cli-plugin-babel": "~4.5.0",
      "@vue/cli-plugin-eslint": "~4.5.0",
      "@vue/cli-plugin-router": "~4.5.0",
      "@vue/cli-plugin-typescript": "~4.5.0",
      "@vue/cli-service": "~4.5.0",
      "@vue/compiler-sfc": "^3.0.0",
      "@vue/eslint-config-typescript": "^7.0.0",
      "eslint": "^6.7.2",
      "eslint-plugin-vue": "^7.0.0",
      "typescript": "~4.1.5"
    }
  });

  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/'))
      .forEach(path => delete files[path])
  })
  api.render('./template');
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true;
  });
}
