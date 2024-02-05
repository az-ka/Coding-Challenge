/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
 * Title: Valid Braces
 * Language: JavaScript
 * Submitted: 06/02/2024
 * Challenge Day: 12
 * Author: Azka
 * Message for the Day: "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn"
 */

function validBraces(braces) {
    // Buat array kosong untuk menampung braces
    let stack = [];
    // Buat object map yang berisi pasangan braces
    let map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    // Perulangan kurang dari panjang braces
    for (let i = 0; i < braces.length; i++) {
        // Perulangan untuk mengecek apakah braces tersebut valid
        if (map[braces[i]]) {
            // Jika i adalah pasangan braces, maka push braces ke dalam stack
            stack.push(braces[i]);
        } else {
            // Jika tidak, maka pop braces terakhir dari stack
            let last = stack.pop();
            // Jika braces tidak sama dengan map[last], maka return false
            if (braces[i] !== map[last]) {
                return false;
            }
        }
    }

    // Jika panjang stack tidak sama dengan 0, maka return false
    if (stack.length !== 0) return false;

    // Jika tidak, maka return true
    return true;
}

console.log(validBraces("{}"));

// Result: true
