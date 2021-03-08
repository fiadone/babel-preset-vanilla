module.exports = () => ({
  "presets": [
    [
      "@babel/preset-env",
      {
        "loose": true,
        "modules": "commonjs",
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-proposal-decorators", {
        "decoratorsBeforeExport": true
      }
    ],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-private-methods"
  ]
})
