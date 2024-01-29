/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
 * Title: String ends with?
 * Language: JavaScript
 * Submitted: 30/01/2024
 * Challenge Day: 5
 * Author: Azka
 * Message for the Day: "Try fail, try again, try once more, and you will succeed."
 */

function solution(str, ending) {
    return str.endsWith(ending);
}

const str = "abcde";
const ending = "cde";

console.log(solution(str, ending));
