import { utilities } from "./utilities.js";

export function currentUppercaseLetter() {
    const currentUppercaseLetter = utilities.getElement("upperCaseLetter").innerHTML;
    return currentUppercaseLetter;
};
export const tryAgain = utilities.getElement("incorrectSound");
export const youDidIt = utilities.getElement("correctSound");
export const uppercaseElement = utilities.getElement("upperCaseLetter");
export const incorrectLetters = utilities.getElement("incorrectLetters");

//start of game
export const loadGame = utilities.getElement("loadGame");
export const game = utilities.getElement("game");

//setLetters
export const minNumber = 25;
export const maxNumber = 97;

//End of game
export const endgame = utilities.getElement("end");
export const yay = utilities.getElement("yay");
export const endsound = utilities.getElement("endSound");
export const incorrectLettersEnd= utilities.getElement("incorrectLettersEnd");