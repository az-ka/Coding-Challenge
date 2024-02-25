/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 * Title: Detect Pangram
 * Language: JavaScript
 * Submitted: 26/02/2024
 * Challenge Day: 28
 * Author: Azka
 * Message for the Day: message for the day
 */

function isPangram(string) {
    // Mengecek apakah string yang diberikan adalah pangram atau tidak
    return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // should return true
console.log(isPangram("This is not a pangram.")); // should return false
