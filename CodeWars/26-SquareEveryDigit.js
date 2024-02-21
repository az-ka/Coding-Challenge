/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
 * Title: Square Every Digit
 * Language: JavaScript
 * Submitted: 22/02/2024
 * Challenge Day: 26
 * Author: Azka
 * Message for the Day: message for the day
 */

function squareDigits(num) {
    // Mengubah setiap digit angka menjadi digit pangkat 2
    return Number(
        num
            .toString()
            .split("")
            .map((digit) => digit ** 2)
            .join("")
    );
}

console.log(squareDigits(9119)); // should return 811181
