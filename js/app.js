'use strict';

let username = getUsername();
let numberCorrect = 0;
document.getElementById('quizzer').addEventListener('click', doQuiz);

function getUsername() {
  let user = prompt('What is your name?');
  document.getElementById('name').textContent = user;
  alert('Greetings ' + user + ', welcome to the Benjamin Small immersive experience\r\rIf you can answer these simple questions correct we will know you are a true Benjain Small superfan and will be entered into a raffle to win our grand prize of $100 million!!\r\rTry clicking INTERACTIVE');
  return user;
}

function doQuiz() {
  let yesNoQs = ['Was Ben born on a Thursday?', 'Has Ben ever worked for Miracle Ram?', 'Does Ben want kids?', 'Is Ben an only child?', 'Does Ben have more Nephews than Neices?'];
  for(let i = 0; i < yesNoQs.length; i++) {
    yesNo(yesNoQs[i], i % 2 !== 1);
  }
  let favoriteHobbies = ['Skiing', 'Disc Golf', 'Ping Pong', 'Board Games', 'Hiking'];
  guessRandomNumber();
  let hobbyResults = guessHobby(6, favoriteHobbies);
  printHobbyResults(favoriteHobbies, hobbyResults[0], hobbyResults[1]);
  giveResults();
}

function giveResults() {
  if(numberCorrect >= 7) {
    alert('Congatulations ' + username + '! You are a true Benjamin Small superfan! You answered all ' + numberCorrect + ' questions correctly. None can compare to your prowess!!\r\rI know we promised you $100 million, but please take this complementary "Atta boy"!!');
  } else if (numberCorrect > 0) {
    alert('Sorry ' + username + ', you only got ' + numberCorrect + ' correct. You are not a true Benjamin Small superfan, from the bottom of my heart... I pity you. :(');
  } else {
    alert('Sorry ' + username + ', you did not answer a single question correct. You are an utter disappointment of a person. :(');
  }
}

function guessHobby(guessesRemaining, hobbies) {
  console.log('What is one of my top five favority hobbies?');
  while(guessesRemaining > 0) {
    let userGuess = prompt('What is one of my top five favority hobbies?');
    if(userGuess !== null) {
      for(let i = 0; i < hobbies.length; i++) {
        if(userGuess.toLowerCase() === hobbies[i].toLowerCase()) {
          numberCorrect++;
          guessesRemaining--;
          return [false, guessesRemaining];
        }
      }
    } else {
      return [true, 0];
    }
    guessesRemaining--;
    if(guessesRemaining > 1) {
      alert(`That is incorrect, please guess again. You have ${guessesRemaining} guesses left`);
    } else if (guessesRemaining === 1) {
      alert('That is incorrect, please guess again. You have one guess left');
    }
  }
  return [true, 0];
}

function printHobbyResults(hobbyArray, notGuessed, guessesRemaining) {
  if(notGuessed) {
    alert(`You have exhausted all your guesses, correct answers include ${arrayToString(hobbyArray)}.`);
  } else if (guessesRemaining === 5) {
    alert(`YOU ANSWERED CORRECTLY!! It only took you 1 guess. Correct answers include ${arrayToString(hobbyArray)}.`);
  } else {
    alert(`YOU ANSWERED CORRECTLY!! It only took you ${6 - guessesRemaining} guesses. Correct answers include ${arrayToString(hobbyArray)}.`);
  }
}

function arrayToString(array) {
  if (array !== null) {
    let arrayString = '';
    for(let i = 0; i < array.length; i++) {
      if(i === array.length - 1) {
        arrayString += array[i];
      } else {
        arrayString += array[i] + ', ';
      }
    }
    return arrayString;
  }
}


function guessRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  let guessesRemaining = 4;
  let userGuess;
  console.log('Guess a number between 1 and 10');
  while(userGuess !== randomNumber && guessesRemaining > 0) {
    userGuess = prompt(`Guess a number between 1 and 10, you have ${guessesRemaining} guesses remaining`);
    if (userGuess === null) {
      alert('You have exhausted all your guesses, I am disappointed in your guessing skills');
      return false;
    }
    userGuess = parseInt(userGuess);
    guessesRemaining--;
    if(userGuess === randomNumber && guessesRemaining === 3) {
      alert(`Great Job!! You correctly guessed the number ${randomNumber} in 1 guess!!`);
      numberCorrect++;
      return true;
    } else if (userGuess === randomNumber) {
      alert(`Great Job!! You correctly guessed the number ${randomNumber} in ${4 - guessesRemaining} guesses!!`);
      numberCorrect++;
      return true;
    } else if (userGuess < randomNumber) {
      alert(`That is incorrect, you have to guess higher.\r\rYou have ${guessesRemaining} guesses remaining`);
    } else if (userGuess > randomNumber) {
      alert(`That is incorrect, you have to guess lower.\r\rYou have ${guessesRemaining} guesses remaining`);
    } else {
      alert (`Invalid input, please guess a number.\r\rYou have ${guessesRemaining} guesses remaining`);
    }
  }
  alert('You have exhausted all your guesses, I am disappointed in your guessing skills');
  return false;
}


function yesNo(question, answer) {
  let validResponse = false;
  while(!validResponse) {
    let response = prompt(question);
    if(response !== null) {
      response = response.toLowerCase();
      if(!answer) {
        if(response === 'no' || response === 'n') {
          numberCorrect++;
          alert('Good job, that\'s correct! You have answered ' + numberCorrect + ' questions correctly!');
          validResponse = true;
        } else if (response === 'yes' || response === 'y') {
          alert('That is incorrect. You have answered ' + numberCorrect + ' questions correctly!');
          validResponse = true;
        } else {
          alert('Invalid input, plese try "Yes", "No", "Y" or "N"');
        }
      } else {
        if(response === 'yes' || response === 'y') {
          numberCorrect++;
          alert('Good job, that\'s correct! You have answered ' + numberCorrect + ' questions correctly!');
          validResponse = true;
        } else if (response === 'no' || response === 'n') {
          alert('That is incorrect. You have answered ' + numberCorrect + ' questions correctly!');
          validResponse = true;
        } else {
          alert('Invalid input, plese try "Yes", "No", "Y" or "N"');
        }
      }
    } else {
      validResponse = true;
    }
  }
}
