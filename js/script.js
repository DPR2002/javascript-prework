function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  if(argMoveId == 2){
    return 'papier';
  }
  if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let computerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


if (playerInput == '1')
  playerMove = 'kamień';
}
else if (playerInput == '2') {
  playerMove = 'papier';
}
else if (playerInput == '3') {
  playerMove = 'nożyce';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

console.log('Wylosowana liczba: ' + randomNumber);
console.log('Gracz wylosował: ' + playerInput);

if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'kamień'
}

console.log('moves:', argComputerMove, argPlayerMove);
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
if (
  argComputerMove  =='kamień' && argPlayerMove =='papier' ||
  argComputerMove  =='papier' && argPlayerMove =='nożyce' ||
  argComputerMove  =='nożyce' && argPlayerMove =='kamień'
) {
  printMessage('Wygrałeś!');
} else if (argComputerMove == argPlayerMove) {
  printMessage('Remis!');
} else {
  printMessage('Przegrałeś!')
}







printMessage('Mój ruch:' + computerMove);
printMessage('Twój ruch:' + playerMove);
