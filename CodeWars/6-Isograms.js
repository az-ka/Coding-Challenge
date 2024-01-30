/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
 * Title: Isograms
 * Language: JavaScript
 * Submitted: 31/01/2024
 * Challenge Day: 6
 * Author: Azka
 * Message for the Day: message for the day
 */

function isIsogram(str) {
    // str.toLowerCase() berfungsi untuk mengubah string menjadi huruf kecil
    // new Set() berfungsi untuk menyimpan data yang unik atau tidak berulang
    // size berfungsi untuk menghitung jumlah data yang tersimpan di dalam Set
    // str.length berfungsi untuk menghitung panjang string
    // Jika jumlah data yang tersimpan di dalam Set sama dengan panjang string, maka return true, jika tidak maka return false
    return new Set(str.toLowerCase()).size == str.length;
}

const str = "Dermatoglyphics";

console.log(isIsogram(str));
