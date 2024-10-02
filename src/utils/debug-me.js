// TODO: JsDocs e Traduzir comentários
function debugMe(debug, logName, message, options = {}) {
  if (!debug) return; // Se debug estiver desativado, não faz nada

  // Definir as opções padrão
  const {
    logColor = "color: blue;", // Cor padrão para o nome do log
    messageColor = "color: brown;", // Cor padrão para a mensagem
  } = options;

  // Verifica o tipo da mensagem para formatar corretamente
  if (Array.isArray(message) || typeof message === "object") {
    console.log(`%c${logName}:`, logColor); // Exibe o nome do log com a cor definida
    console.table(message); // Usa console.table para arrays e objetos
  } else {
    console.log(`%c${logName}: %c${message}`, logColor, messageColor); // Exibe a mensagem com cores
  }
}

module.exports = debugMe;
