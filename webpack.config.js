const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

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
  {
    // Comando Digest
    entry: "./src/digest.js", // Novo ponto de entrada para o comando
    output: {
      filename: "digest.js", // O arquivo será gerado na pasta dist
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2", // Para CommonJS
    },
    mode: "production",
    plugins: [new NodePolyfillPlugin()], // Adiciona o polyfill apenas aqui
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  },
];
