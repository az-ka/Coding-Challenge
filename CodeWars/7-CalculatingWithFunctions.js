/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
 * Title: Calculating with Functions
 * Language: JavaScript
 * Submitted: 1/02/2024
 * Challenge Day: 7
 * Author: Azka
 * Message for the Day: "Great things never come from comfort zones."
 */

function zero(operation) {
    // Jika operation bernilai true, maka jalankan operation(0), jika tidak maka return 0
    return operation ? operation(0) : 0;
}

function one(operation) {
    // Jika operation bernilai true, maka jalankan operation(1), jika tidak maka return 1
    return operation ? operation(1) : 1;
}

function two(operation) {
    // Jika operation bernilai true, maka jalankan operation(2), jika tidak maka return 2
    return operation ? operation(2) : 2;
}

function three(operation) {
    // Jika operation bernilai true, maka jalankan operation(3), jika tidak maka return 3
    return operation ? operation(3) : 3;
}

function four(operation) {
    // Jika operation bernilai true, maka jalankan operation(4), jika tidak maka return 4
    return operation ? operation(4) : 4;
}

function five(operation) {
    // Jika operation bernilai true, maka jalankan operation(5), jika tidak maka return 5
    return operation ? operation(5) : 5;
}

function six(operation) {
    // Jika operation bernilai true, maka jalankan operation(6), jika tidak maka return 6
    return operation ? operation(6) : 6;
}

function seven(operation) {
    // Jika operation bernilai true, maka jalankan operation(7), jika tidak maka return 7
    return operation ? operation(7) : 7;
}

function eight(operation) {
    // Jika operation bernilai true, maka jalankan operation(8), jika tidak maka return 8
    return operation ? operation(8) : 8;
}

function nine(operation) {
    // Jika operation bernilai true, maka jalankan operation(9), jika tidak maka return 9
    return operation ? operation(9) : 9;
}

function plus(num) {
    // Jika num bernilai true, maka jalankan function (num2), jika tidak maka return num + num2
    return function (num2) {
        return num + num2;
    };
}

function minus(num) {
    // Jika num bernilai true, maka jalankan function (num2), jika tidak maka return num - num2
    return function (num2) {
        return num2 - num;
    };
}

function times(num) {
    // Jika num bernilai true, maka jalankan function (num2), jika tidak maka return num * num2
    return function (num2) {
        return num * num2;
    };
}

function dividedBy(num) {
    // Jika num bernilai true, maka jalankan function (num2), jika tidak maka return num / num2
    return function (num2) {
        return Math.floor(num2 / num);
    };
}

// Fungsi plus, minus, times, dan dividedBy mengembalikan function yang mengembalikan hasil penjumlahan, pengurangan, perkalian, dan pembagian
// Fungsi zero, one, two, three, four, five, six, seven, eight, dan nine mengembalikan angka 0, 1, 2, 3, 4, 5, 6, 7, 8, dan 9
// Contoh: nine(dividedBy(three())) = 3, karena three() mengembalikan angka 3, dan dividedBy(3) mengembalikan angka 1, karena 9 / 3 = 3
console.log(nine(dividedBy(three())));
