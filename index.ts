#! /usr/bin/env node
import inquirer from "inquirer"
const Quiz: {
   QuestionNo1 :string;
   QuestionNo2 :string;
   QuestionNo3 :string;
   QuestionNo4 :string;
   QuestionNo5 :string;
} = await inquirer.prompt([{
    name:"QuestionNo1",
    type: "list",
    message :"Typescript is a language ?",
    choices : ["Dynamic language","Static language","global language"]
},{
      name:"QuestionNo2",
      type: "list",
      message :"Enum used for values ?",
      choices : ["Constant values","Changed values","Similiar values"]
    },{
        name:"QuestionNo3",
        type: "list",
        message :"Async function is always returns ?",
        choices : ["Promises" ,"Values" ,"String"]
    },{
        name:"QuestionNo4",
        type: "list",
        message :"Logical operators are ?",
        choices : ["==" , "&& ||" , "= <"]
    },{
        name:"QuestionNo5",
        type: "list",
        message :" 'name() => {} ' is a syntax of ?",
        choices : ["Object" , "Arrow function" ,"class"]
    }
]);
   let score : number = 0;
   switch(Quiz.QuestionNo1){
    case 'Static language' :
    console.log(`No1 _ Correct`);
    ++score;
    break;
    default:
    console.log('No1 _ Incorrct')
   }
   switch(Quiz.QuestionNo2){
    case 'Constant values' :
    console.log(`No2 _ Correct`);
    ++score;
    break;
    default:
    console.log('No2 _ Incorrct')
   }
   switch(Quiz.QuestionNo3){
    case 'Promises' :
    console.log(`No3 _ Correct`);
    ++score;
    break;
    default:
    console.log('No3 _ Incorrct')
   }switch(Quiz.QuestionNo4){
    case '&& ||' :
    console.log(`No4 _ Correct`);
    ++score;
    break;
    default:
    console.log('No5 _ Incorrct')
   }switch(Quiz.QuestionNo5){
    case 'Arrow function' :
    console.log(`No5 _ Correct`);
    ++score;
    break;
    default:
    console.log('No5 _ Incorrct')
   }
   console.log(`score : ${score}`);
   