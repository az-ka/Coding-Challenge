/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
 * Title: Rot13
 * Language: JavaScript
 * Submitted: 07/02/2024
 * Challenge Day: 13
 * Author: Azka
 * Message for the Day: "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
 */

function rot13(message) {
    // Mengganti huruf a-z dan A-Z dengan huruf yang berada 13 huruf setelahnya
    return message.replace(/[a-zA-Z]/g, function (c) {
        // Menggunakan charCodeAt untuk mengembalikan kode ASCII dari karakter yang diberikan
        return String.fromCharCode(
            c.charCodeAt(0) + (c.toLowerCase() <= "m" ? 13 : -13)
        );
    });
}

console.log(rot13("Test"));

// Result: "Grfg"
