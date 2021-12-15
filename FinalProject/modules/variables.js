import { utilities } from "./utilities.js";

export function currentUppercaseLetter() {
    const currentUppercaseLetter = utilities.getElement("upperCaseLetter").innerHTML;
    return currentUppercaseLetter;
};
export const tryAgain = utilities.getElement("incorrectSound");
export const youDidIt = utilities.getElement("correctSound");
export const uppercaseElement = utilities.getElement("upperCaseLetter");

//start of game
export const loadGame = utilities.getElement("loadGame");
export const game = utilities.getElement("game");

//setLetters
export const minNumber = 25;
export const maxNumber = 97;