/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
 * Title: Replace With Alphabet Position
 * Language: JavaScript
 * Submitted: 02/02/2024
 * Challenge Day: 8
 * Author: Azka
 * Message for the Day: "Just keep going. Everybody gets better if they keep at it."
 */

function alphabetPosition(text) {
    return text
        .replace(/[^a-zA-Z]/g, "")
        .split("")
        .map((char) => char.toLowerCase().charCodeAt(0) - 96)
        .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Result: 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
