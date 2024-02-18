/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
 * Title: Categorize New Member
 * Language: JavaScript
 * Submitted: 19/02/2024
 * Challenge Day: 23
 * Author: Azka
 * Message for the Day: "Bring it on!"
 */

function openOrSenior(data) {
    // Membuat perulangan untuk mengecek data
    return data.map(([age, handicap]) =>
        // Jika umur lebih dari 55 dan handicap lebih dari 7 maka kategori senior, jika tidak kategori open
        age >= 55 && handicap > 7 ? "Senior" : "Open"
    );
}

console.log(
    openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
    ])
); // should return ['Open', 'Senior', 'Open', 'Senior']
