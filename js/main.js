// ROCK PAPER SCISSORS

// ask user for an input via prompt, has to be either rock, paper or scissors.

// If different input then loop and ask for another.

// use Math.random to get a random number between one and three. Assign each number to rock, paper , scissor,(1 = rock, 2 = paper, etc.)

// taking the user input determine if the user wins or if the computer wins

document.querySelector('#rock').addEventListener('click', rock);
document.querySelector('#paper').addEventListener('click', paper);
document.querySelector('#scissors').addEventListener('click', scissors);
document.querySelector('body').addEventListener('click', playMusic)

let rockSound = document.querySelector('#rockSound')
rockSound.volume = 0.1;

let paperSound = document.querySelector('#paperSound')
paperSound.volume = 0.1;

let scissorsSound = document.querySelector('#scissorsSound')
scissorsSound.volume = 0.1;

function playMusic() {
 let gameMusic = document.querySelector('#gameMusic');
 gameMusic.play();
 gameMusic.volume = 0.1; 
}

function rock() {
  userHand = 'rock';
  document.querySelector('#selectedRock').classList.remove('hidden')
  document.querySelector('#selectedPaper').classList.add('hidden')
  document.querySelector('#selectedScissors').classList.add('hidden')
  rockSound.play()
  rockPaperScissors();
}

function paper() {
  userHand = 'paper';
  document.querySelector('#selectedPaper').classList.remove('hidden')
  document.querySelector('#selectedRock').classList.add('hidden')
  document.querySelector('#selectedScissors').classList.add('hidden')
  paperSound.play()
  rockPaperScissors();
}

function scissors() {
  userHand = 'scissors';
  document.querySelector('#selectedScissors').classList.remove('hidden')
  document.querySelector('#selectedRock').classList.add('hidden')
  document.querySelector('#selectedPaper').classList.add('hidden')
  scissorsSound.play()
  rockPaperScissors();
}


  var youWin = 0
  var compWin = 0

    console.log(youWin)
    console.log(compWin)
    document.querySelector('#userScore').innerText = youWin
    document.querySelector('#compScore').innerText = compWin
    
var userHand = ''

function rockPaperScissors() {
  
  function assignCompHand() {
    let compHand = Math.floor(Math.random() * 3) + 1
    if (compHand === 1) {
      compHand = 'rock'
      document.querySelector('#compRock').classList.remove('hidden')
      document.querySelector('#compPaper').classList.add('hidden')
      document.querySelector('#compScissors').classList.add('hidden')
      
    } else if (compHand === 2) {
      compHand = 'paper'
      document.querySelector('#compPaper').classList.remove('hidden')
      document.querySelector('#compRock').classList.add('hidden')
      document.querySelector('#compScissors').classList.add('hidden')
      
    } else {
      compHand = 'scissors'
      document.querySelector('#compScissors').classList.remove('hidden')
      document.querySelector('#compPaper').classList.add('hidden')
      document.querySelector('#compRock').classList.add('hidden')
      
    }
    return compHand
  }


let comp = assignCompHand()

if (userHand === 'rock' && comp === 'scissors') {
  youWin++
  document.querySelector('#timeToDual').innerText = 'You Win!!!';
  
} else if (userHand === 'paper' && comp === 'rock') {
  youWin++
  document.querySelector('#timeToDual').innerText = 'You Win!!!';
  
} else if (userHand === 'scissors' && comp === 'paper') {
  youWin++
  document.querySelector('#timeToDual').innerText = 'You Win!!!';
  
} else if (userHand === comp) {
  document.querySelector('#timeToDual').innerText = 'Round ends in a draw';

} else {
  compWin++
  document.querySelector('#timeToDual').innerText = 'You Lose!!!';
}
document.querySelector('#userScore').innerText = youWin
document.querySelector('#compScore').innerText = compWin
}