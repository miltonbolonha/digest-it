#!/usr/bin/env node

/**
 * Command Line Interface (CLI) script for DigestIt.
 *
 * Use this script to initialize DigestIt with a specific message.
 *
 * Available commands:
 * - `initialize [message]`: Initializes the digest with a message.
 * - `help`: Displays available options.
 *
 * Usage examples:
 * ```
 * node ./src/cli.js initialize --message "Hello"
 * # Output: Initialization complete: Hello
 *
 * node ./src/cli.js help
 * # Displays help
 * ```
 *
 * @module src/digest
 */

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const DigestIt = require("./index"); // Importing the DigestIt class

/**
 * Configure Yargs to manage commands and options.
 */
const argv = yargs(hideBin(process.argv))
  .command("initialize [message]", "Initialize the digest with a message", {
    message: {
      description: "The initialization message",
      alias: "m",
      type: "string",
    },
  })
  .help().argv;

/**
 * Check the user's commands and perform the corresponding actions.
 */
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
