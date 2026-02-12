module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    // Vue 관련
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'warn',
    
    // JavaScript 관련
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    
    // 코드 스타일
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never']
  }
}
