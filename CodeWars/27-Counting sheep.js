/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
 * Title: Counting sheep...
 * Language: JavaScript
 * Submitted: 23/02/2024
 * Challenge Day: 27
 * Author: Azka
 * Message for the Day: message for the day
 */

function countSheeps(arrayOfSheep) {
    // Menghitung jumlah domba yang ada di dalam array
    return arrayOfSheep.filter((sheep) => sheep).length;
}

console.log(
    countSheeps([
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
    ])
); // should return 17
