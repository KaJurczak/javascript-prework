function playGame(playerInput){

  clearMessages()

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if (argMoveId == 2){
      return 'papier';
    }
    else if (argMoveId == 3){
      return 'nożyce';
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }


  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);


  printMessage('Mój ruch to: ' + argComputerMove);


  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);

  function displayResult(argComputerMove, argPlayerMove){
    console.log('wybory:', argComputerMove, argPlayerMove);
    //printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Remis');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('Remis');
    } else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Nieprawidłowy wybór, spróbuj w nastęnej rundzie');
    }
  }

  displayResult(argComputerMove, argPlayerMove);
}

function buttonClickedRock(){
  console.log('funkcja zadzialala, kliknieto guzik kamol');
  playGame(1);
}

function buttonClickedPaper(){
  console.log('funkcja zadzialala, kliknieto guzik papiren');
  playGame(2);
}

function buttonClickedScissors(){
  console.log('funkcja zadzialala, kliknieto guzik ciachCiach');
  playGame(3);
}

let buttonRock = document.getElementById('play-rock');
//console.log('o co kaman?');
buttonRock.addEventListener('click', buttonClickedRock);


let buttonPaper = document.getElementById('play-paper');

buttonPaper.addEventListener('click', buttonClickedPaper);


let buttonScissors = document.getElementById('play-scissors');

buttonScissors.addEventListener('click', buttonClickedScissors);
