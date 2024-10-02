// index.js

/**
 * DigestIt.js
 * @class
 */
class DigestIt {
  /**
   * Creates an instance of DigestIt.
   * @param {string} message - The initialization message.
   */
  constructor(message) {
    this.message = message;
  }
  /**
   * Adds two numbers.
   * @returns {number} - The sum of num1 and num2.
   */

  /**
   * Initialization method to log a message.
   * @param {string} userMessage - The user provided message.
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
  window.DigestIt = DigestIt; //
}
