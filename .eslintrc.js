module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: ['html'],
  globals: {
    $: true,
    ga: true,
    google: true,
    arguments: true,
    Sugar: true,
  },
  rules: {
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    'no-console': 1,
    'no-multi-spaces': 0,
    'no-unused-vars': 1,
    'max-len': 1,
    // 'quotes': [1, 'single', {"avoidEscape": true}],
    'quotes': [1, 'single', {allowTemplateLiterals: true}],

    // セミコロン省略
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  },
};
