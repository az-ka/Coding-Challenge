/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
 * Title: Two to One
 * Language: JavaScript
 * Submitted: 29/01/2024
 * Challenge Day: 4
 * Author: Azka
 * Message for the Day: "Quality is not an act, it is a habit."
 */

function longest(s1, s2) {
    // Menggabungkan string s1 dan s2
    const combined = s1.concat(s2);
    // Mengubah string menjadi array
    const combinedArray = combined.split("");
    // Mengurutkan array sesuai abjad
    const sortedArray = combinedArray.sort();
    // Menghapus huruf yang sama
    const uniqueArray = [...new Set(sortedArray)];
    // Mengubah array menjadi string
    const uniqueString = uniqueArray.join("");
    // Mengembalikan string
    return uniqueString;
}

// Best Practice
function longest2(s1, s2) {
    return [...new Set(s1 + s2)].sort().join("");
}

function longest3(s1, s2) {
    return Array.from(new Set(s1 + s2))
        .sort()
        .join("");
}
const s1 = "xyaabbbccccdefww";
const s2 = "xxxxyyyyabklmopq";

console.log(longest(s1, s2));

// Result: "abcdefklmopqwxy"
