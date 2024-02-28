/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
 * Title: Square(n) Sum
 * Language: JavaScript
 * Submitted: 29/02/2024
 * Challenge Day: 31
 * Author: Azka
 * Message for the Day: message for the day
 */

function squareSum(numbers) {
    // Reduce berfungsi untuk mengurangi array menjadi satu nilai
    // acc adalah accumulator, cur adalah current value
    // acc + cur * cur adalah rumus untuk menghitung kuadrat
    // 0 adalah nilai awal
    return numbers.reduce((acc, cur) => acc + cur * cur, 0);
}

console.log(squareSum([1, 2, 2])); // 9
