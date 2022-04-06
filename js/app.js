"use strict";
let username = prompt("What is your name?");
document.getElementById("name").textContent = username;
alert("Greetings " + username + ", welcome to the Benjamin Small immersive experience\r\rIf you can answer these simple questions correct we will know you are a true Benjain Small superfan and will be entered into a raffle to win our grand prize of $100 million!!");

let numberCorrect = 0;
no(prompt("Was Ben born on a Wednesday?"));
no(prompt("Has Ben ever worked for Miracle Ram?"));
yes(prompt("Does Ben want kids?"));
no(prompt("Is Ben an only child?"));
yes(prompt("Does Ben have more Nephews than Neices?"));
if(numberCorrect >= 5) {
  alert('Congatulations ' + username + '! You are a true Benjamin Small superfan! None can compare to your prowess!! I know we promised you $100 million, but please take this complementary "Atta boy"!!');
} else if (numberCorrect > 0) {
  alert("Sorry " + username + ", you only got " + numberCorrect + " correct. You are not a true Benjamin Small superfan, from the bottom of my heart... I pity you. :(");
} else {
  alert("Sorry " + username + ", you did not answer a single question correct. You are an utter disappointment of a person. :(");
}

function no(response) {
  if(response === null) {
    response = "";
  } else {
    response = response.toLowerCase();
    if(response == "no" || response == "n") {
      numberCorrect++;
      alert("Good job, that's correct! You have answered " + numberCorrect + " questions correctly!");
      // console.log("Good job, that's correct! You have answered " + numberCorrect + " questions correctly!")
    } else {
      alert("That is incorrect.")
      // console.log("That is incorrect.")
    }
  }
}

function yes(response) {
  if(response === null) {
    response = ""
  } else {
    response = response.toLowerCase();
    if(response == "yes" || response == "y") {
      numberCorrect++;
      alert("Good job, that's correct! You have answered " + numberCorrect + " questions correctly!");
      // console.log("Good job, that's correct! You have answered " + numberCorrect + " questions correctly!")
    } else {
      alert("That is incorrect.")
      // console.log("That is incorrect.")
    }
  }
}