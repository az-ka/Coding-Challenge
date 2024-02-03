/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
 * Title: Which are in?
 * Language: JavaScript
 * Submitted: 03/02/2024
 * Challenge Day: 9
 * Author: Azka
 * Message for the Day: message for the day
 */

function inArray(array1, array2) {
    // Filter dari array1 yang memiliki kata yang sama dengan array2
    // Kemudian diurutkan
    return array1
        .filter((word) => array2.some((str) => str.includes(word)))
        .sort();
}

const a1 = ["live", "arp", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));

// Result: ["arp", "live", "strong"]
