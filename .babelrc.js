module.exports = {
  presets: ['react-app'],
  plugins: [
    'react-require',
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '~': './src',
          '@': './src/img',
        },
      },
    ],
  ],
}
