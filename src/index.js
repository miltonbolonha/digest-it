/**
 * DigestIt.js
 * @class
 * @classdesc A class to handle various operations for the DigestIt project.
 */
class DigestIt {
  /**
   * Creates an instance of DigestIt.
   * @constructor
   * @param {string} message - The initialization message.
   */
  constructor(message) {
    /**
     * @property {string} message - The message used for initialization.
     */
    this.message = message;
  }

  /**
   * Initialization method to log a message.
   * @method
   * @param {string} userMessage - The user provided message.
   * @example
   * const instance = new DigestIt("Hello");
   * instance.initialize("Welcome!");
   * // Logs: Initialization complete: Welcome!
   */
  initialize(userMessage) {
    console.log(`Initialization complete: ${userMessage}`);
  }

  // async syncContent() {
  // }
}

module.exports = DigestIt;

//  ES Modules, browser only
if (typeof window !== "undefined") {
  window.DigestIt = DigestIt;
}
