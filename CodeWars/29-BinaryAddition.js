/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
 * Title: Binary Addition
 * Language: JavaScript
 * Submitted: 27/02/2024
 * Challenge Day: 29
 * Author: Azka
 * Message for the Day: message for the day
 */

function addBinary(a, b) {
    // Menambahkan dua bilangan biner
    // Menggunakan method toString(2) untuk mengubah hasil penjumlahan menjadi bilangan biner
    return (a + b).toString(2);
}

console.log(addBinary(1, 1)); // should return "11"
