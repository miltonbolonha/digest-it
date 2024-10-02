#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
// const DigestIt = require("./index"); // Importando a classe DigestIt

// Configurar o yargs para gerenciar comandos e opções
const argv = yargs(hideBin(process.argv))
  .command("atom", "Processa dados em formato Atom", {
    rss: {
      description: "Ativa a opção RSS",
      alias: "rr",
      type: "boolean",
    },
  })
  .command(
    "help",
    "Exibe as opções disponíveis",
    () => {},
    (argv) => {
      console.log(`
      Uso: digest [opções]

      Comandos disponíveis:
        atom               Processa dados em formato Atom
        help               Exibe as opções disponíveis

      Opções:
        -r, --rss          Ativa a opção RSS
        -h, --help         Exibe esta ajuda
    `);
    }
  )
  .help().argv;

// Placeholder para futuras funções
if (argv._.includes("atom")) {
  console.log("Comando 'atom' processado.");
  console.log(argv);

  if (argv.r) {
    console.log("A opção RSS está ativada.");
  }

  // Criando uma instância de DigestIt
  //   const digest = new DigestIt(1, 2);
  console.log("digest.add()"); // Chamando o método add para exemplo
} else if (argv._.includes("help")) {
  // O comando help é tratado pela função de callback do yargs
  // Não é necessário código adicional aqui
  console.log("reconhecido 'digest --help'.");
} else {
  console.log("Comando não reconhecido. Use 'digest --help' para ver opções.");
}
