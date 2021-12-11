let minNumber = 25;
let maxNumber = 97;


function start(){

    let upper = getElement("upperCaseLetter");
    upper.innerHTML = "A";
    setLowercaseLetters("A");
    let boxes = document.getElementsByClassName("lowerCaseLetter");

    for (let i=0; i< boxes.length; i++){
        console.log (boxes[i]);
        boxes[i].addEventListener('touchmove', moveOnTouch);
        boxes[i].addEventListener('touchend', checkOnEnd);
    };
    displayIncorrect();

    //set up local storage
    let response = loadResponses("numberCorrect");
    if (response !== null){
        console.log("Number Correct: "+ response);
    }else if (response == null){
        let response = 0
        saveResponses("numberCorrect", response);
    }else {
        console.log("something went wrong with local storage. Failed to load Number of correct.")
    }

    //set up local storage
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
function setLetters(){
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

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // ev.target.innerHTML = data;
    const tryAgain = getElement("incorrectSound");
    tryAgain.pause();
    tryAgain.currentTime = 0;
    if(checkAnswer(data)){
        console.log("correct");
        getElement("correctSound").play();
    }
    else{
        tryAgain.play();
        console.log("incorrect");
    }
    displayIncorrect();
    
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.innerHTML);
}
function allowDrop(ev){
    ev.preventDefault();
}



function load(){
    start();

}

function moveOnTouch(e){

    // grab the location of touch
    var touchLocation = e.targetTouches[0];
    let lowercaseLetter = e.target;
        
    // assign box new coordinates based on the touch.
    lowercaseLetter.style.left = touchLocation.pageX + 'px';
    lowercaseLetter.style.top = touchLocation.pageY + 'px';
}

function checkOnEnd(e){
    const tryAgain = getElement("incorrectSound");
    let lowercase = e.target ;
    // console.log(lowercase.id);
    // current box position.
    var x = parseInt(lowercase.style.left);
    // console.log(lowercase.style.left);
    var y = parseInt(lowercase.style.top);
    const data = lowercase.innerHTML;
    // console.log(lowercase.style.top);
    const result = checkPlacement(x,y);
    console.log(result);
    tryAgain.pause();
    tryAgain.currentTime = 0;
    if(result && checkAnswer(data)){
        resetBlock(lowercase);
        console.log("correct");
        getElement("correctSound").play();
    }else if (!result){
        resetBlock(lowercase);

    }
    else{
        resetBlock(lowercase);
        tryAgain.play();
        currentLetter = getElement("upperCaseLetter").innerHTML;
        recordIncorrect(currentLetter);
        console.log("incorrect");
    }
    displayIncorrect()
}

function checkPlacement(x,y){
    // console.log( x, y)

    if (x >= 135 && x <= 168 && y >= 30 && y <= 65) {
        // console.log("X made it!");
        // console.log("Y made it!");
        return true;

    }else{
        return false
    }
}

function resetBlock(letter){
    const id = letter.id;
    letter.style.top = 150 + 'px';
    switch(id){
        case 'optionOne':
            letter.style.left = 5 + '%';
            break;
        case 'optionTwo':
            letter.style.left = 30 + '%';
            break;
        case 'optionThree':
            letter.style.left = 55 + '%';
            break;
        case 'optionFour':
            letter.style.left = 80 + '%';
            break;
    }

}

function recordCorrect(){
    let response = loadResponses("numberCorrect");
    numberResponse = parseInt(response)
    numberResponse += 1;
    saveResponses("numberCorrect",numberResponse);
}

function recordIncorrect(letter){
    let response = loadResponses("incorrect");
    console.log(response);
    responseObject = JSON.parse(response);
    console.log(responseObject);
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

function displayIncorrect(){
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

function resetCount(){
    localStorage.clear();
    displayIncorrect();
}