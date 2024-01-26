/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
 * Title: Convert string to camel case
 * Language: JavaScript
 * Submitted: 26/01/2024
 * Challenge Day: 1
 * Author: Azka
 * Message for the Day: "Keep calm and code on!"
 */

function toCamelCase(str) {
    // str merupakan argumen yang akan diubah
    // str.replace() akan mencari semua karater yang sesuai dengan regex(/[-_](.)/g)
    // dan (_, c) => c.toUpperCase() akan mengubah karakter yang sesuai dengan regex menjadi huruf kapital
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

let str = ["the-stealth-warrior", "The_Stealth_Warrior", "The_Stealth-Warrior"];

for (let i = 0; i < str.length; i++) {
    console.log(toCamelCase(str[i]));
}

// Result:
// theStealthWarrior
// TheStealthWarrior
// TheStealthWarrior
