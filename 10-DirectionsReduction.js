/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 * Title: Directions Reduction
 * Language: JavaScript
 * Submitted: 04/02/2024
 * Challenge Day: 10
 * Author: Azka
 * Message for the Day: "Always do your best. What you plant now, you will harvest later. - Og Mandino"
 */

function dirReduc(arr) {
    let i = 0;
    // Perulangan untuk menghapus arah yang berlawanan
    while (i < arr.length) {
        // Jika arah yang berlawanan ditemukan, maka hapus arah tersebut
        if (
            (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
            (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
            (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
            (arr[i] === "WEST" && arr[i + 1] === "EAST")
        ) {
            // Hapus arah yang berlawanan
            arr.splice(i, 2);
            i = 0;
        } else {
            // Jika tidak ditemukan arah yang berlawanan, maka lanjutkan perulangan
            i++;
        }
    }
    // Kembalikan hasil
    return arr;
}

const compas = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

console.log(dirReduc(compas));

// Result: ["WEST"]
