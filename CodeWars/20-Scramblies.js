/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
 * Title: Scramblies
 * Language: JavaScript
 * Submitted: 14/02/2024
 * Challenge Day: 20
 * Author: Azka
 * Message for the Day: "Now is the time to do it. If you wait, it might never happen."
 */

function scramble(str1, str2) {
    // Buat variabel obj dengan nilai objek kosong
    const obj = {};
    // Lakukan perulangan sebanyak panjang dari str1
    for (let i = 0; i < str1.length; i++) {
        // Jika obj memiliki properti str1[i]
        if (obj[str1[i]]) {
            // Tambahkan nilai dari properti str1[i] dengan 1
            obj[str1[i]]++;
        } else {
            // Jika tidak, buat properti str1[i] dengan nilai 1
            obj[str1[i]] = 1;
        }
    }
    // Lakukan perulangan sebanyak panjang dari str2
    for (let i = 0; i < str2.length; i++) {
        // Jika obj memiliki properti str2[i]
        if (obj[str2[i]]) {
            // Kurangi nilai dari properti str2[i] dengan 1
            obj[str2[i]]--;
        } else {
            // Jika tidak, kembalikan nilai false
            return false;
        }
    }
    // Kembalikan nilai true
    return true;
}

console.log(
    scramble(
        "iepfwtbwtqmhgxwbqmkodlpdzrxkveggamdwcxgplgxkeaakvkthgwqchuweouxpkfjthvguadvbzlixkmxywphvgudfcxnlawugyrhmdudbtpxuqwsxvrgcdvznjpyovhomhjuptytagumcadijbwutugamhzppygantbgewnvdudbrrofdqmkdrwmvwdxptvnvyhmrylrmwuztuiffzaetaplewojzpgntawqayvnbhc",
        "mrjowfiglmojnfjnthpspqrtyspuhoaaqwrobcakfemtivjpasrxirkaphwrccrcvcadfxsvmvdjqbzqkxxcaedfuseuproheqfvkprvqbvcrcaqcypwvddseapktpxkjwtfusjpxnweozgsporufbhhuxlohslbtbviicmdvqcegknzngnntqhjwniubtilhhdaos"
    )
); // true
