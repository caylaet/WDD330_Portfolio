let minNumber = 25;
let maxNumber = 97;

function start(){
    let upper = getElement("upperCaseLetter");
    upper.innerHTML = "A";
    setLowercaseLetters("A");
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
let box = getElement("optionOne")

box.addEventListener('touchmove',function(e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];
    
    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  });

box.addEventListener('touchend', function(e) {
    // current box position.
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  })