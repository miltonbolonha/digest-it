#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const DigestIt = require("./index"); // Importando a classe DigestIt

const argv = yargs(hideBin(process.argv))
  .command("initialize [message]", "Initialize the digest with a message", {
    message: {
      description: "The initialization message",
      alias: "m",
      type: "string",
    },
  })
  .help().argv;

if (argv._.includes("initialize")) {
  const message = argv.message || "Default initialization message";
  const digest = new DigestIt(message);
  digest.initialize(message);
} else if (argv._.includes("help")) {
  console.log(`
        Usage: digest [options]

        Available commands:
          initialize      Initialize the digest with a message
          help            Show help

        Options:
          -m, --message   The initialization message
          -h, --help      Show help
    `);
} else {
  console.log("Unrecognized command. Use 'digest --help' to see options.");
}
