/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
 * Title: Find the next perfect square!
 * Language: JavaScript
 * Submitted: 28/02/2024
 * Challenge Day: 30
 * Author: Azka
 * Message for the Day: message for the day
 */

function findNextSquare(sq) {
    // Menghitung akar kuadrat dari sq
    let sqrt = Math.sqrt(sq);
    // Jika hasil akar kuadrat adalah bilangan bulat, maka kembalikan hasil kuadrat dari sqrt + 1
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

console.log(findNextSquare(121)); // should return 144
