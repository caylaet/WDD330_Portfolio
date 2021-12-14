import { displayIncorrect, recordIncorrect } from "./abc.js";

export const mobile = {

    onTouchMove(e){

        // grab the location of touch
        var touchLocation = e.targetTouches[0];
        let lowercaseLetter = e.target;
            
        // assign box new coordinates based on the touch.
        lowercaseLetter.style.left = touchLocation.pageX + 'px';
        lowercaseLetter.style.top = touchLocation.pageY + 'px';
    },
    
    onTouchEnd(e){
        //set up my variables
        const tryAgain = getElement("incorrectSound");
        let lowercase = e.target ;

        var x = parseInt(lowercase.style.left);
        var y = parseInt(lowercase.style.top);
        const data = lowercase.innerHTML;

        const result = this.checkPlacement(x,y);


        tryAgain.pause();
        tryAgain.currentTime = 0;


        if(result && checkAnswer(data)){
            this.resetBlock(lowercase);
            getElement("correctSound").play();

        }else if (!result){
            this.resetBlock(lowercase);
        }
        else{
            this.resetBlock(lowercase);
            tryAgain.play();
            currentLetter = getElement("upperCaseLetter").innerHTML;
            recordIncorrect(currentLetter);
            console.log("incorrect");
        }
        displayIncorrect()
    },
    
    checkPlacement(x,y){
        if (x >= 135 && x <= 168 && y >= 30 && y <= 65) {
            // console.log("X made it!");
            // console.log("Y made it!");
            return true;
    
        }else{
            return false
        }
    },
    
    resetBlock(letter){
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

}