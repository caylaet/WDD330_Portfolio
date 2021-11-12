
const letterHits ={
    a: 16,
    s: 16,
    d: 16,
    f: 16,
    g: 16,
    h: 16,
    j: 16,
    k: 16,
    l: 16

}

document.addEventListener('keydown', (event) => {
    letter = event.key;
    if(isKey(letter)){
        playElement(letter);
    }else{
        console.log("A different key than one of the above was pressed")
    }
   
  }, false);

  document.addEventListener('keyup', (event) => {
    letter = event.key;
    if(isKey(letter)){
        endPlay(letter);
    }else{
        console.log("A different key than one of the above was pressed")
    }
  }, false);

  //This function will get any element by its id and return it
  function getElement(id){
    const element = document.getElementById(id);
    return element;
  }

  //This function will play the sound, add the playing class and move the
  //element down
  function playElement(letter){
    element = getElement(letter);
    // console.dir(element);
    elementSound = getElement(letter+"-Sound");
    elementSound.play();
    element.classList.add("playing");
    moveKeyButton(letter, element);
    // console.log(element);
    
  }

  //This function will pause the sound as well as remove the playing class
  function endPlay(letter){
    element = getElement(letter);
    elementSound = getElement(letter+"-Sound");
    elementSound.pause();
    elementSound.currentTime = 0;
    element.classList.remove("playing");
  }
  
  //This function will add 10px to the corresponding letter in the object 
  //and update the margin. If it has been pressed more than 10 times it will 
  //reset the px for the object and margins.
  function moveKeyButton(letter, element){
    letterHits[letter] += 10;
    if (letterHits[letter] >116 ){
        element.style.margin = "16px 16px 16px 16px";
        letterHits[letter] = 16;
        console.log(letterHits);
    }else{
        element.style.margin = letterHits[letter]+"px 16px 16px 16px";
        console.log(letterHits);
    }
  }

  //This function compares the letter pressed with the above object variables 
  //if there is a match it will return true.
  function isKey(letter){
    for (const objectLetter in letterHits){
        if(objectLetter == letter){
            return true;
        }
    }
  }