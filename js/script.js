const  myGame = function() {

  let playerScore = 0;
  let computerScore = 0;

  const playGame = function(playerInput){

    clearMessages();

    const getMoveName = function(argMoveId){
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

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);


    printMessage('Mój ruch to: ' + argComputerMove);


    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    const argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);



    const displayResult = function(argComputerMove, argPlayerMove){
      console.log('wybory:', argComputerMove, argPlayerMove);
      //printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        printMessage('Ty wygrywasz!');
        playerScore += 1;
      } else if (argComputerMove === argPlayerMove) {
        printMessage('Remis');
      } else {
        printMessage('Komputer wygrywa!');
        computerScore += 1;
      }
    }

    displayResult(argComputerMove, argPlayerMove);

    printMessage("wynik gracza = " + playerScore + ", wynik komputera = " + computerScore);
  }

const buttonClickedRock = function(){
  console.log('funkcja zadzialala, kliknieto guzik kamol');
  playGame(1);
}

const buttonClickedPaper = function(){
  console.log('funkcja zadzialala, kliknieto guzik papiren');
  playGame(2);
}

const buttonClickedScissors = function(){
  console.log('funkcja zadzialala, kliknieto guzik ciachCiach');
  playGame(3);
}

const buttonRock = document.getElementById('play-rock');
//console.log('o co kaman?');
buttonRock.addEventListener('click', buttonClickedRock);


const buttonPaper = document.getElementById('play-paper');

buttonPaper.addEventListener('click', buttonClickedPaper);


const buttonScissors = document.getElementById('play-scissors');

buttonScissors.addEventListener('click', buttonClickedScissors);

}

myGame();
