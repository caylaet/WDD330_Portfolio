const alphabet = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z'
}
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
    switch (optionNumber){
        case 0:
            console.log("1");
            option1.innerHTML = alphabet[upperCaseLetter];
            option2.innerHTML = randomLowercaseLetter();
            option3.innerHTML = randomLowercaseLetter();
            option4.innerHTML = randomLowercaseLetter();
            break;
        case 1:
            console.log("2");
            option1.innerHTML = randomLowercaseLetter();
            option2.innerHTML = alphabet[upperCaseLetter];
            option3.innerHTML = randomLowercaseLetter();
            option4.innerHTML = randomLowercaseLetter();
            break;
        case 2:
            console.log("3");
            option1.innerHTML = randomLowercaseLetter();
            option2.innerHTML = randomLowercaseLetter();
            option3.innerHTML = alphabet[upperCaseLetter];
            option4.innerHTML = randomLowercaseLetter();
            break;
        case 3:
            console.log("4");
            option1.innerHTML = randomLowercaseLetter();
            option2.innerHTML = randomLowercaseLetter();
            option3.innerHTML = randomLowercaseLetter();
            option4.innerHTML = alphabet[upperCaseLetter];
            break;
    }

}
function nextUppercaseLetter(current){
    let position;
    var keys = Object.keys(alphabet);
    keys.forEach(element => {if(element == current){
        position = keys.indexOf(element);
    }});
    return keys[position + 1];
    
}
function setLetters(){
    console.log("made it");
    let upper = getElement("upperCaseLetter");
    let next = nextUppercaseLetter(upper.innerHTML);
    upper.innerHTML = next;
    setLowercaseLetters(next);
    

}
function randomLowercaseLetter() {
    var keys = Object.keys(alphabet);
    return alphabet[keys[ Math.floor(keys.length * Math.random())]];
};

//This function will get any element by its id and return it
function getElement(id){
const element = document.getElementById(id);
return element;
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // ev.target.innerHTML = data;
    setLetters();
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.innerHTML);
}
function allowDrop(ev){
    ev.preventDefault();
}
start();