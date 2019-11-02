module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true,
      "modules": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  env: {
    "browser": true,
    "node": true,
    "jest": true,
    "commonjs": true
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
