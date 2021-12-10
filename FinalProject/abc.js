let minNumber = 25;
let maxNumber = 97;
let correctCount =0;
let incorrectCount = 0;
let incorrectLetters = [];

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
    console.log("made it");
    let upper = getElement("upperCaseLetter");
    let next = nextUppercaseLetter(upper.innerHTML);
    upper.innerHTML = next;
    setLowercaseLetters(next);

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
    
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.innerHTML);
}
function allowDrop(ev){
    ev.preventDefault();
}
start();




function moveOnTouch(e){
    // grab the location of touch
    var touchLocation = e.targetTouches[0];
    let lowercaseLetter = e.target;
        
    // assign box new coordinates based on the touch.
    lowercaseLetter.style.left = touchLocation.pageX + 'px';
    lowercaseLetter.style.top = touchLocation.pageY + 'px';
}

function checkOnEnd(e){
    let lowercase = e.target ;
    console.log(lowercase.id);
    // current box position.
    var x = parseInt(lowercase.style.left);
    // console.log(lowercase.style.left);
    var y = parseInt(lowercase.style.top);
    const data = lowercase.innerHTML;
    // console.log(lowercase.style.top);
    const result = checkPlacement(x,y);
    console.log(result);
    const tryAgain = getElement("incorrectSound");
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
        console.log("incorrect");
    }
}

function checkPlacement(x,y){
    console.log( x, y)

    if (x >= 135 && x <= 168 && y >= 30 && y <= 65) {
        console.log("X made it!");
        console.log("Y made it!");
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