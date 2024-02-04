/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
 * Title: Multiples of 3 or 5
 * Language: JavaScript
 * Submitted: 05/02/2024
 * Challenge Day: 11
 * Author: Azka
 * Message for the Day: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs"
 */

function solution(number) {
    let sum = 0;
    // Perulangan untuk mengecek apakah angka tersebut merupakan kelipatan 3 atau 5
    // Jika i habis dibagi 3 atau 5, maka tambahkan i ke dalam sum
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(110));
