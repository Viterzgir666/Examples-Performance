module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    parser: 'babel-eslint',
    env: {
        es6: true,
        node: true
    },
    plugins: ['babel' , 'prettier'],
    rules: {
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        'no-unused-vars': [
            'warn'
        ],
        'no-console': 2,
        'no-redeclare': 'warn',
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always']
    }
};
