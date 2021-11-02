let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
    playerMove = 'papier';
  }

  if(playerInput == '3'){
    playerMove = 'nożyce';
  }

printMessage('Twój ruch to: ' + computerMove);

let computerMove = 'nieznany ruch';

if(computerInput == '1'){
    computerMove = 'kamień';
}

if(playerInput == '2'){
    computerMove = 'papier';
  }

  if(playerInput == '3'){
    computerMove = 'nożyce';
  }

printMessage('Twój ruch to: ' + computerMove);
