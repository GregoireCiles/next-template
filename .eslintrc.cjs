module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
    next: {
      rootDir: true,
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', 'jsx', '.ts', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(glsl|frag|scss|css|svg|json)$'],
  },
  rules: {
    // React Hooks
    'react-hooks/rules-of-hooks': 'off',

    // Tailwind Plugin
    'tailwindcss/no-custom-classname': 'off',

    // Import Plugin
    'import/named': 'error',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-restricted-paths': 'off',
    'import/max-dependencies': ['off', { max: 10 }],
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': [
      'off',
      {
        allow: [],
      },
    ],
    'import/unambiguous': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/group-exports': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
      },
    ],
    'import/no-relative-parent-imports': 'off',
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: [],
      },
    ],
    'import/no-relative-packages': 'error',
  },
  ignorePatterns: ['!.*.js', '!.*.ts', '!.*.tsx', 'node_modules', '.next', 'dist', 'build'],
};
