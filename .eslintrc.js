module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true
  },

  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'prettier/react'],

  plugins: ['react', 'jsx-a11y'],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53' // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  },

  rules: {
    'prettier/prettier': [
      2,
      {
        endOfLine: 'lf',
        tabWidth: 2,
        arrowParens: 'avoid',
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      },
      {
        usePrettierrc: false
      }
    ],

    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],

    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: true
      }
    ],

    'react/forbid-prop-types': [
      0,
      {
        forbid: []
      }
    ],

    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'arrow-parens': 0,
    camelcase: 0,
    'comma-dangle': 0,
    'global-require': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'semi-style': 0,
    semi: 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'brace-style': 0,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'no-undef': 'error',
    'react/display-name': 0
  }
}
