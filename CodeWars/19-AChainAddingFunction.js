/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
 * Title: A Chain adding function
 * Language: JavaScript
 * Submitted: 13/02/2024
 * Challenge Day: 19
 * Author: Azka
 * Message for the Day: "Just because you are struggling does NOT mean you are failing. Every great success requires some type of worthy struggle to get there."
 */

function add(n) {
    // Buat variabel f dengan nilai fungsi yang menerima parameter x
    // Fungsi ini akan mengembalikan nilai dari n + x
    const f = (x) => add(n + x);
    // Tambahkan properti valueOf ke dalam fungsi f
    // Properti ini akan mengembalikan nilai dari n
    f.valueOf = () => n;
    // Kembalikan nilai dari f
    // Ekspektasi: f akan mengembalikan nilai dari n
    // Alur: add(1)(2) -> n = 1, x = 2 -> add(1 + 2) -> add(3) -> n = 3 -> f.valueOf() -> 3
    return f;
}

console.log(add(1)); // 1
