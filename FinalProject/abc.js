

function start(){
    let upper = getElement("upperCaseLetter");
    upper.innerHTML = "A";
    setLowercaseLetters("A");
}

function setLowercaseLetters(upperCaseLetter){
    let option1 = getElement("optionOne");
    let option2 = getElement("optionTwo");
    let option3 = getElement("optionThree");
    let option4 = getElement("optionFour");
    optionNumber = Math.floor(4 * Math.random());
    console.log(optionNumber);
    let matchLowercaseLetter = matchLowerLetter(upperCaseLetter);
    switch (optionNumber){
        case 0:
            console.log("1");
            option1.innerHTML = matchLowercaseLetter;
            option2.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option3.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option4.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            break;
        case 1:
            console.log("2");
            option1.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option2.innerHTML = matchLowercaseLetter;
            option3.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option4.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            break;
        case 2:
            console.log("3");
            option1.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option2.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option3.innerHTML = matchLowercaseLetter;
            option4.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            break;
        case 3:
            console.log("4");
            option1.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option2.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option3.innerHTML = randomLowercaseLetter(matchLowercaseLetter);
            option4.innerHTML = matchLowercaseLetter;
            break;
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
function matchLowerLetter(upper){
    let lowercase = upper.charCodeAt(0);
    lowercase += 32;
    return String.fromCharCode(lowercase);
}
function setLetters(){
    console.log("made it");
    let upper = getElement("upperCaseLetter");
    let next = nextUppercaseLetter(upper.innerHTML);
    upper.innerHTML = next;
    setLowercaseLetters(next);
    

}
function randomLowercaseLetter(matchLowercaseLetter) {
    let generateRandom = Math.floor(Math.random() * 25 + 97);
    while (generateRandom == matchLowercaseLetter.charCodeAt(0)){
        generateRandom = Math.floor(Math.random() * 25 + 97);
    }
    return String.fromCharCode(generateRandom);
};

function checkAnswer(data){
    // console.log(data.charCodeAt(0));
    // console.log(getElement("upperCaseLetter").innerHTML.charCodeAt(0));
   if((data.charCodeAt(0)) - (getElement("upperCaseLetter").innerHTML.charCodeAt(0))  == 32){
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
    if(checkAnswer(data)){
        console.log("correct");
        setLetters();
    }
    else( console.log("incorrect"))
    
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.innerHTML);
}
function allowDrop(ev){
    ev.preventDefault();
}
start();