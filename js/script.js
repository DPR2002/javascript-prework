let computerMove = `Nieznany ruch`;
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if (playerInput == '1') {
  playerMove = 'kamień';
}
else if (playerInput == '2') {
  playerMove = 'papier';
}
else if (playerInput == '3') {
  playerMove = 'nożyce';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = `Nieznany ruch`;

console.log('Wylosowana liczba: ' + randomNumber);
console.log('Gracz wylosował: ' + playerInput);

if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'kamień'
}

if (
 computerMove =='kamień' && playerMove =='papier' ||
 computerMove =='papier' && playerMove =='nożyce' ||
