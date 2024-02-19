/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
 * Title: A Needle in the Haystack
 * Language: JavaScript
 * Submitted: 20/02/2024
 * Challenge Day: 24
 * Author: Azka
 * Message for the Day: "We should be able to find the needle in the haystack"
 */

function findNeedle(haystack) {
    // Mencari kata needle di dalam array haystack
    // Menggunakan indexOf untuk mencari posisi kata needle
    return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(
    findNeedle([
        "3",
        "123124234",
        undefined,
        "needle",
        "world",
        "hay",
        2,
        "3",
        true,
        false,
    ])
); // should return 'found the needle at position 3'
