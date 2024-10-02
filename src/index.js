const executeStep = require("./utils/execute-step");
const debugMe = require("./utils/debug-me");

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
  initialize(
    initialPipeConfig = { deleteOldCrons: true, deleteGPTWorkflows: false },
    workflowDir = ".github/workflow",
    config = {}
  ) {
    if (!config) return null;
    debugMe(true, "config", config, {
      logColor: "green",
      messageColor: "yellow",
    });
    debugMe(true, "workflowDir", workflowDir, {
      logColor: "green",
      messageColor: "yellow",
    });

    debugMe(true, "initialPipeConfig", initialPipeConfig, {
      logColor: "green",
      messageColor: "yellow",
    });

    //   config?.deleteOldCrons
    //   ? await executeStep("🗑️ - Delete: Old Crons", cleanOldBuildYMLFiles, [
    //       workflowDir,
    //     ])
    //   : null;

    // // Post Scheduling
    // config?.deleteGPTWorkflows
    //   ? await executeStep(
    //       "📝 - Write: Delete GPT Schedule Files",
    //       deleteGPTWorkflows,
    //       [workflowDir]
    //     )
    //   : null;
    // Update Triggers:
    // await executeStep("🔄 - Generate: Update System", generateUpdateYML);
    // await executeStep("🔄 - Generate: Monthly Update", generateMonthlyUpdateYML);
    // await executeStep("🔄 - Generate: User Update", generateTriggerUpdateYML);
  }

  // async syncContent() {
  // }
}

module.exports = DigestIt;

//  ES Modules, browser only
if (typeof window !== "undefined") {
  window.DigestIt = DigestIt;
}

new DigestIt().initialize({ deleteOldCrons: true, deleteGPTWorkflows: true });
