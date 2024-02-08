/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
 * Title: The observed PIN
 * Language: JavaScript
 * Submitted: 09/02/2024
 * Challenge Day: 15
 * Author: Azka
 * Message for the Day: "Fighting!"
 */

function getPINs(observed) {
    // Array 'adjacent' berisi digit-digit yang berdekatan pada keypad numerik untuk setiap digit.
    const adjacent = [
        [0, 8], // Digit yang berdekatan dengan 0
        [1, 2, 4], // Digit yang berdekatan dengan 1
        [1, 2, 3, 5], // Digit yang berdekatan dengan 2
        [2, 3, 6], // Digit yang berdekatan dengan 3
        [1, 4, 5, 7], // Digit yang berdekatan dengan 4
        [2, 4, 5, 6, 8], // Digit yang berdekatan dengan 5
        [3, 5, 6, 9], // Digit yang berdekatan dengan 6
        [4, 7, 8], // Digit yang berdekatan dengan 7
        [5, 7, 8, 9, 0], // Digit yang berdekatan dengan 8
        [6, 8, 9], // Digit yang berdekatan dengan 9
    ];

    // Fungsi split() digunakan untuk memecah string 'observed' menjadi array digit.
    // Fungsi reduce() digunakan untuk menggabungkan semua kemungkinan digit.
    return observed.split("").reduce(
        (acc, digit) => {
            // Untuk setiap digit dalam 'observed', kita menggabungkan semua PIN yang ada di akumulator saat ini
            // dengan setiap digit yang berdekatan dengan digit saat ini.
            return acc.reduce((newAcc, pin) => {
                // Fungsi map() digunakan untuk mengubah setiap digit berdekatan menjadi kombinasi PIN baru,
                // dan fungsi concat() digunakan untuk menambahkannya ke akumulator baru.
                return newAcc.concat(adjacent[digit].map((adj) => pin + adj));
            }, []);
        },
        [""] // Akumulator awal adalah array dengan string kosong.
    );
}

console.log(getPINs("8"));

// Result:  [ '5', '7', '8', '9', '0' ]

// Keypad Numerik
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
