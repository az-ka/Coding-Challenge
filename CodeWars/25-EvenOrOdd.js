/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
 * Title: Even or Odd
 * Language: JavaScript
 * Submitted: 21/02/2024
 * Challenge Day: 25
 * Author: Azka
 * Message for the Day: "Let's check if the number is even or odd"
 */

function evenOrOdd(number) {
    // Mengecek apakah angka yang dimasukkan adalah genap atau ganjil
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(2)); // should return 'Even'
