module.exports = {
  presets: ["@babel/preset-env", "@babel/react"],

  plugins: [
    'react-require',
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@': './src',
          'img': './src/img',
          'utils': './src/utils',
          'components': './src/components',
        },
      },
    ],
  ],
}
