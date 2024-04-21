#!/usr/bin/env/node
import inquirer from "inquirer";
  import chalk from "chalk";
console.log(chalk.bgYellowBright("****WORD COUNTER"));


const userAns: {
    sentence :string
}= await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:"Enter your Sentence to Count The Word:"
        }
    ]
);
const words = userAns.sentence.trim().split(" ")

console.log(words);

console.log(`your sentence word count is ${words.length}`);
console.log(chalk.bgMagenta(words));



        

        
    
