#! /usr/bin/env node 
import inquirer from "inquirer";
// 1) Computer will generate random number -Done
// 2) User input for guessing game -Done
// 3) compare user input with computer generated number and show result -Done
const randomNumber = Math.floor(Math.random()*10 +1);
console.log("Welcome to my cli guessing game");

const answers = await inquirer.prompt([
    {
      name: "userGuessNumber",
      type: "number",
      message: "Please guess a number between 1 to 10"
    },
]);
if (answers.userGuessNumber=== randomNumber){
  console.log("Congratulations! your guessing number is right.");  
} else {
  console.log("Ops! sorry your guessing number is wrong");
  
}
