const path = require("path");

module.exports = [
  ['use-babel-config', '.babelrc.js'],
  ["use-eslint-config", ".eslintrc.js"],
  ['use-babel-jest-config'],
  [
    'use-rewire',
    'react-app-rewire-css-modules-extensionless',
    {
      test: /\.css$/,
      include: path.join(__dirname, 'src'),
      exclude: path.join(__dirname, 'node_modules'),
    },
    'react-app-rewire-compression-plugin',
    { test: /\.js(\?.*)?$/i, cache: true },
  ]
]
