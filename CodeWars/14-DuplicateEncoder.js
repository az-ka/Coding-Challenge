/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 * Title: Duplicate Encoder
 * Language: JavaScript
 * Submitted: 26/01/2024
 * Challenge Day: 14
 * Author: Azka
 * Message for the Day: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
 */

function duplicateEncode(word) {
    // Mengembalikan kata yang diubah menjadi huruf kecil, kemudian dipecah menjadi array
    return (
        word
            .toLowerCase()
            .split("")
            // Mengubah setiap huruf menjadi "(" jika huruf tersebut hanya muncul sekali  dan ")" jika huruf tersebut muncul lebih dari sekali
            .map(function (a, i, w) {
                return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
            })
            .join("")
    );
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
// Result: "((("
// Result: "()()()"
// Result: ")())())"
// Result: "))(("
