/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
 * Title: Pick peaks
 * Language: JavaScript
 * Submitted: 12/02/2024
 * Challenge Day: 18
 * Author: Azka
 * Message for the Day: "Wrong is wrong, even if everyone is doing it. Right is right, even if no one is doing it."
 */

function pickPeaks(arr) {
    // Buat objek result dengan 2 properti, pos dan peaks, keduanya berupa array kosong
    const result = { pos: [], peaks: [] };
    // Buat variabel pos dengan nilai -1
    let pos = -1;
    // Lakukan perulangan sebanyak panjang array arr
    for (let i = 1; i < arr.length; i++) {
        // Jika nilai arr ke-i lebih besar dari nilai arr ke-(i-1)
        if (arr[i] > arr[i - 1]) {
            // Set pos dengan nilai i
            pos = i;
            // Jika nilai arr ke-i lebih kecil dari nilai arr ke-(i-1) dan pos tidak sama dengan -1
        } else if (arr[i] < arr[i - 1] && pos !== -1) {
            // Push nilai pos ke dalam array pos
            result.pos.push(pos);
            // Push nilai arr ke-pos ke dalam array peaks
            result.peaks.push(arr[pos]);
            // Set pos dengan nilai -1
            pos = -1;
        }
    }
    return result;
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])); // {pos: [3, 7], peaks: [6, 3]}
