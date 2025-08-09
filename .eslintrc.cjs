/****
 * ESLint configuration to prevent inline styles and MUI `sx` prop.
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    react: { version: 'detect' },
  },
  env: {
    browser: true,
    es2021: true,
    node: false,
  },
  ignorePatterns: ['dist/**'],
  rules: {
    // Disallow React inline style prop
    'react/forbid-dom-props': [
      'error',
      { forbid: ['style'] }
    ],
    // Not needed with React 17+ automatic runtime
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    // Forbid MUI `sx` prop usage
    'no-restricted-syntax': [
      'error',
      {
        selector: "JSXAttribute[name.name='sx']",
        message: 'Use SCSS classes instead of the MUI `sx` prop.',
      },
    ],
  },
}
