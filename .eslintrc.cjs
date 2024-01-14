module.exports = {
    root: true,
    env: { browser: true, es2022: true },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ],
        'jsx-quotes': [2, 'prefer-single'],
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                semi: true
            }
        ]
    }
};
