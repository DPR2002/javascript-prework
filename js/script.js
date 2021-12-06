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
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(playerInput);

printMessage('Mój ruch:' + computerMove);
printMessage('Twój ruch:' + playerMove);

displayResult(computerMove, playerMove);
