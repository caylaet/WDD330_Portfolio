import {mobile} from './mobile.js';

let minNumber = 25;
let maxNumber = 97;



export function start(){
    const game = document.getElementById("game");
    game.style.display = "block";
    const loadGame = document.getElementById("loadGame");
    loadGame.style.display ="none";
    let upper = getElement("upperCaseLetter");
    upper.innerHTML = "A";
    setLowercaseLetters("A");
    let boxes = document.getElementsByClassName("lowerCaseLetter");

    for (let i=0; i< boxes.length; i++){
        console.log (boxes[i]);
        boxes[i].addEventListener('touchmove', mobile.onTouchMove);
        boxes[i].addEventListener('touchend', mobile.onTouchEnd);
    };
    displayIncorrect();
    setUpLocalStorage();
}
function setUpLocalStorage(){
    let incorrectResponse = loadResponses("incorrect");
    if (incorrectResponse !== null){
        console.log(incorrectResponse);
        // let incorrect = JSON.parse(incorrectResponse);
        // console.log("Incorrect: "+ incorrect);
    }else if (incorrectResponse == null){
        const array = {};
        response = JSON.stringify(array)
        saveResponses("incorrect", response);
    }else {
        console.log("something went wrong with local storage failed to load Number of incorrect.")
    }

}

function setLowercaseLetters(upperCaseLetter){
    let lowercaseLetter = matchLowerLetter(upperCaseLetter);
    let numberOfRandom = 3;
    let randomLetters = generateRandomNumbers(numberOfRandom,minNumber,maxNumber,[lowercaseLetter.charCodeAt(0)])
    let lowercaseLetters = document.getElementsByClassName("lowerCaseLetter");
    optionNumber = Math.floor(4 * Math.random());
    let randomLettersPosition = 1;
    for (let i = 0; i < lowercaseLetters.length; i++){
        if(i === optionNumber){
            lowercaseLetters[i].innerHTML = lowercaseLetter;
            continue;
        }
        lowercaseLetters[i].innerHTML = String.fromCharCode(randomLetters[randomLettersPosition]);
        randomLettersPosition++;
    }
}
function nextUppercaseLetter(current){
    let nextUpper = current.charCodeAt(0);
    if (nextUpper < 90){
        nextUpper += 1;
    }else{
        nextUpper = 65;
    }
    return String.fromCharCode(nextUpper);
    
}
//given an uppercase letter will return the matching lowercase letter
function matchLowerLetter(upper){
    let lowercase = upper.charCodeAt(0);
    lowercase += 32;
    return String.fromCharCode(lowercase);
}
//This funciton sets the next uppercase letter and lowercase letters
export function setLetters(){
    let upper = getElement("upperCaseLetter");
    let next = nextUppercaseLetter(upper.innerHTML);
    upper.innerHTML = next;
    setLowercaseLetters(next);
    recordCorrect();

}

//Generates an array of random numbers between two numbers with no repeats
function generateRandomNumbers(amountRandom,lower,higher,numberArray =[]) {
    for (i = 0; i < amountRandom; i++){
        let generateRandom = Math.floor(Math.random() * lower + higher);
        while (numberArray.includes(generateRandom)){
            generateRandom = Math.floor(Math.random() * lower + higher);
        }
        numberArray.push(generateRandom);
    }
    return numberArray;
};

//Checks if the lowercase dropped matchesthe current uppercase letter
function checkAnswer(lowercaseLetter){
   if((lowercaseLetter.charCodeAt(0)) - (getElement("upperCaseLetter").innerHTML.charCodeAt(0))  == 32){
       return true;
   }
   else { return false;}
}

//This function will get any element by its id and return it
function getElement(id){
const element = document.getElementById(id);
return element;
}




 



function recordCorrect(){
    let response = loadResponses("numberCorrect");
    numberResponse = parseInt(response)
    numberResponse += 1;
    saveResponses("numberCorrect",numberResponse);
}

export function recordIncorrect(letter){
    let response = loadResponses("incorrect");
    responseObject = JSON.parse(response);
    let found = false;
    for (const key in responseObject){
        if (key == letter){
            responseObject[key]+=1;
            found = true;
            break;
        }
    }
    if (!found){
        responseObject[letter] = 1;
    }
    saveResponses("incorrect",JSON.stringify(responseObject));
}

function loadResponses(type){
    var response = window.localStorage.getItem(type);
    return response;
    // JSON.parse(toDoArray);

}
function saveResponses(type, response){
    window.localStorage.setItem(type,response);
}

export function displayIncorrect(){
    console.log("here");
    const inccorrectLetters = getElement("incorrectLetters");
    inccorrectLetters.innerHTML = "";
    let incorrectView = "";
    let response = loadResponses("incorrect");
    responseArray = JSON.parse(response);
    for (const key in responseArray){
        incorrectView +=" "+key+": "+ responseArray[key];
    }
    inccorrectLetters.innerHTML = incorrectView;
}

export function resetCount(){
    localStorage.clear();
    setUpLocalStorage();
    displayIncorrect();
}