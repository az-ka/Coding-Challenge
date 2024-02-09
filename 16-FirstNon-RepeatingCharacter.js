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
    // Membuat variabel result
    let result = s
        // Memecah string menjadi array
        .split("")
        // Mengembalikan huruf yang hanya muncul sekali
        .filter(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a);
        })
        // Menggabungkan array menjadi string
        .join("");
    // Mengembalikan huruf pertama yang hanya muncul sekali
    return result.length > 0 ? result[0] : "";
}

console.log(firstNonRepeatingLetter("stress"));

// Result: "t"
