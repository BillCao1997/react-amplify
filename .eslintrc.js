module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest', 'import'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      'linebreak-style': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      "import/order": [
        "error",
        {
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          },
          "newlines-between": "always",
        }
      ],
      "react/prop-types": 0,
      "react/no-deprecated": 1,
      "react/display-name": "off",
      "@typescript-eslint/no-use-before-define": 0,
    },
  };
