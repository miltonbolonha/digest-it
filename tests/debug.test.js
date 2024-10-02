const { test } = require("node:test");
const assert = require("node:assert");
const debugMe = require("../src/utils/debug-me");

test("DebugME function i/o", (t) => {
  const logName = "Initialize";
  const message = "Welcome to DigestIt!";

  let loggedMessage = "";
  console.log = function (...args) {
    loggedMessage = args.join(" ");
  };

  // Chamar a função debugMe com uma string simples
  debugMe(true, logName, message, {
    logColor: "color: blue;",
    messageColor: "color: brown;",
  });

  // Verificar se a mensagem foi logada corretamente, incluindo cores
  assert.strictEqual(
    loggedMessage,
    `%cInitialize: %cWelcome to DigestIt! color: blue; color: brown;`
  );

  // Teste para verificar quando um objeto é logado como tabela
  const data = { name: "John", age: 30 };
  let tableOutput = "";
  console.table = function (data) {
    tableOutput = "Tabela gerada";
  };

  // Chamar a função debugMe com um objeto para gerar uma tabela
  debugMe(true, logName, data);

  // Verificar se a tabela foi gerada
  assert.strictEqual(tableOutput, "Tabela gerada");
});
