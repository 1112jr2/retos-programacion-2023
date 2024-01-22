/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

/**
| Usuario    | Computadora | Resultado       |
|------------|-------------|-----------------|
| Piedra     | Piedra      | Empate          |
| Piedra     | Papel       | Computadora gana|
| Piedra     | tijera      | Usuario gana    |
| Papel      | Piedra      | Usuario gana    |
| Papel      | Papel       | Empate          |
| Papel      | tijera      | Computadora gana|
| tijera     | Piedra      | Computadora gana|
| tijera     | Papel       | Usuario gana    |
| tijera     | tijera      | Empate          |

 */

function game(entrada) {
  let player1 = 0;
  let player2 = 0;
  for (let i = 0; i < entrada.length; i++) {
    let newArray = entrada[i];
    if (
      (newArray[0] === "piedra" && newArray[1] === "piedra") ||
      (newArray[0] === "papel" && newArray[1] === "papel") ||
      (newArray[0] === "tijera" && newArray[1] === "tijera")
    ) {
      return console.log(`Tie`);
    } else if (
      (newArray[0] === "piedra" && newArray[1] === "tijera") ||
      (newArray[0] === "papel" && newArray[1] === "piedra") ||
      (newArray[0] === "tijera" && newArray[1] === "papel")
    ) {
      player1 = +1;
    } else if (
      (newArray[0] === "piedra" && newArray[1] === "papel") ||
      (newArray[0] === "papel" && newArray[1] === "tijera") ||
      (newArray[0] === "tijera" && newArray[1] === "piedra")
    ) {
      player2 = +1;
    }
  }
  return player1 > player2
    ? console.log(`El ganador es Player 1`)
    : console.log(`El ganador es Player 2`);
}

function tbbt(partida) {
  const entrada = game(partida);
  return entrada;
}

const partida1 = tbbt([
  ["piedra", "piedra"],
  ["tijera", "tijera"],
  ["papel", "papel"],
]);

const partida2 = tbbt([
  ["piedra", "papel"],
  ["papel", "tijera"],
  ["tijera", "piedra"],
]);

const partida3 = tbbt([
  ["piedra", "tijera"],
  ["papel", "piedra"],
  ["tijera", "papel"],
]);
