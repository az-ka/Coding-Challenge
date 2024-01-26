/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
 * Title: Jaden Casing Strings
 * Language: JavaScript
 * Submitted: 27/01/2024
 * Challenge Day: 2
 * Author: Azka
 * Message for the Day: "One step at a time!"
 */

String.prototype.toJadenCase = function () {
    // this.split(" ") akan memisahkan setiap kata dalam string
    // .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) akan mengubah huruf pertama dari setiap kata menjadi huruf kapital
    return this.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());

// Result:
// How Can Mirrors Be Real If Our Eyes Aren't Real
