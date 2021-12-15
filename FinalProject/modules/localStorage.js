import { utilities } from "./utilities.js";

export const localStorage = {
    
    /* This sets up local storage with an array that will hold the 
    information for incorrect letters */
    setUp(){

        const incorrectResponse = load("incorrect");
        try{
            if (incorrectResponse !== null){
                console.log(incorrectResponse);
            }else if (incorrectResponse == null){
                const array = {};
                const response = JSON.stringify(array)
                save("incorrect", response);
            };
        }
        catch {
            console.log(incorrectResponse);
        };
    
    },

    /* This will record to local storage every time there is a mistake. 
    If the letter already exists adds a count to it if not puts the letter in. */
    recordIncorrect(letter){
        const response = load("incorrect");
        const responseObject = JSON.parse(response);
        let found = false;
        for (const key in responseObject){
            if (key == letter){
                responseObject[key]+=1;
                found = true;
                break;
            };
        };
        if (!found){
            const start = 1;
            responseObject[letter] = start;
        };
        save("incorrect",JSON.stringify(responseObject));
    },
    
    /* This will display the information found in local storage of incorrect letters */
    displayIncorrect(){
        const inccorrectLetters = utilities.getElement("incorrectLetters");
        inccorrectLetters.innerHTML = "";
        let incorrectView = "";
        const response = load("incorrect");
        const responseArray = JSON.parse(response);
        for (const key in responseArray){
            incorrectView +=" "+key+": "+ responseArray[key];
        };
        inccorrectLetters.innerHTML = incorrectView;
    }
    
};

/* Called when user wants to reset the count for incorrect letters */
export function resetCount(){
    window.localStorage.clear();
    localStorage.setUp();
    localStorage.displayIncorrect();
};

/* This will retrieve from local storage based on the title given */
function load(type){
    var response = window.localStorage.getItem(type);
    return response;
};

/* This will save an item to local storage under a title given */
function save(type, response){
    window.localStorage.setItem(type,response);
};