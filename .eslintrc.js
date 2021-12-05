module.exports = {
  root: true,
  extends: [
    '@takamachi/eslint-config/presets/react-typescript-prettier',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
    'plugin:compat/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-invalid-this': 'off',
  },
};
