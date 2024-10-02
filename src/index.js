// index.js

/**
 * DigestIt.js
 * @class
 */
class DigestIt {
  /**
   * Creates an instance of DigestIt.
   * @param {number} num1 - First number.
   * @param {number} num2 - Second number.
   */
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  /**
   * Adds two numbers.
   * @returns {number} - The sum of num1 and num2.
   */
  add() {
    return this.num1 + this.num2;
  }

  // async syncContent() {
  // }
}

module.exports = DigestIt;

//  ES Modules, browser only
if (typeof window !== "undefined") {
  window.DigestIt = DigestIt; //
}
