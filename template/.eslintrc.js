module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // 強制檢查 import 可以被正確解析 
  settings: {
    'import/resolver': {
      'webpack': {
        'config': '.eslint.resolve.config.js'
      }
    }
  },
  // add your custom rules here
  rules: {},
  globals: {}
}
