const { test } = require("node:test");
const { exec } = require("child_process");
const assert = require("assert");

test("CLI initialize command output", (t, done) => {
  // Adicionamos o done explicitamente ao parâmetro do test
  exec(
    'node ./src/digest.js initialize --message "Welcome from CLI!"',
    (error, stdout, stderr) => {
      if (error) {
        console.error("Exec error:", error); // Log do erro
        done(error);
        return;
      }

      try {
        // console.log("stdout:", stdout); // Log da saída padrão
        // console.log("stderr:", stderr); // Log da saída de erro
        assert(stdout.includes("Initialization complete: Welcome from CLI!"));
        done();
      } catch (err) {
        console.error("Assertion error:", err); // Log do erro de asserção
        done(err);
      }
    }
  );
});
