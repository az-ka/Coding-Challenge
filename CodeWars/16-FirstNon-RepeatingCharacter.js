/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
 * Title: First non-repeating character
 * Language: JavaScript
 * Submitted: 10/02/2024
 * Challenge Day: 16
 * Author: Azka
 * Message for the Day: "Just keep going. Everybody gets better if they keep at it. - Ted Williams"
 */

function firstNonRepeatingLetter(s) {
    // Mengembalikan huruf pertama yang tidak berulang dalam sebuah string
    return (
        s.split("").find((a) => s.match(new RegExp(a, "gi")).length === 1) || ""
    );
}

console.log(firstNonRepeatingLetter("stress"));

// Result: "t"
