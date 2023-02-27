module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  ignorePatterns: ['generated.ts', 'next.config.js'],
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'airbnb/base', 'airbnb/hooks', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-curly-newline': 'off',
    'react/function-component-definition': 'off',
    'no-alert': 'off',
    'no-continue': 'off',
    'no-constant-condition': 'off',
    'prefer-regex-literals': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'standard/no-callback-literal': 'off',
    'react/jsx-filename-extension': ['error', {
      extensions: ['.tsx']
    }],
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/label-has-for': ['error', {
      components: ['Label'],
      required: {
        some: ['id', 'nesting']
      },
      allowChildren: true
    }],
    'react/sort-comp': 'off',
    'prefer-const': 'error',
    curly: ['error', 'all'],
    'no-redeclare': ['error', {
      builtinGlobals: true
    }],
    'operator-linebreak': ['error', 'before'],
    'brace-style': ['error', '1tbs'],
    'no-param-reassign': ['error', {
      props: true
    }],
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'return'
    }, {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*'
    }, {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var']
    }, {
      blankLine: 'always',
      prev: 'directive',
      next: '*'
    }, {
      blankLine: 'always',
      prev: 'block-like',
      next: '*'
    }],
    'no-underscore-dangle': ['error', {
      allow: ['__resolveType']
    }],
    'no-useless-constructor': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': 'off',
    'max-classes-per-file': 'off',
    'max-len': ['error', 100, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreComments: true
    }],
    'arrow-parens': ['error', 'always'],
    quotes: ['error', 'single', {
      allowTemplateLiterals: true
    }],
    semi: ['error', 'always'],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
      'newlines-between': 'ignore'
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-console': 'error',
    camelcase: 'off',
    'react/require-default-props': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-use-before-define': ['error', {
      functions: false
    }],
    'default-case': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.svg'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  },
  overrides: [{
    files: ['src/**/*.slice.ts'],
    rules: {
      'no-param-reassign': 'off'
    }
  }]
};