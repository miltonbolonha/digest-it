const path = require("path");

module.exports = [
  {
    // CommonJS configs
    entry: "./src/index.js",
    output: {
      filename: "bundle.cjs.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2", // Para CommonJS
    },
    mode: "production", // Pode ser 'development' ou 'production'
  },
  {
    // ES Modules configs
    entry: "./src/index.js",
    output: {
      filename: "bundle.esm.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "module", // Para ES Module
    },
    experiments: {
      outputModule: true, // Habilitar suporte a ES Modules
    },
    mode: "production",
  },
];
