/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
 * Title: Regex Password Validation
 * Language: JavaScript
 * Submitted: 11/02/2024
 * Challenge Day: 17
 * Author: Azka
 * Message for the Day: "Great things never come from comfort zones."
 */

// assign your RegExp to REGEXP:
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

console.log(REGEXP.test("password")); // false
