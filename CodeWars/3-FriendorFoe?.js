/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
 * Title: Friend or Foe?
 * Language: JavaScript
 * Submitted: 28/01/2024
 * Challenge Day: 3
 * Author: Azka
 * Message for the Day: "Consistency is the key!"
 */

function friend(friends) {
    // Filter nama teman dengan kondisi panjang string sama dengan 4
    return friends.filter((friend) => friend.length === 4);
}

const friends = ["Ryan", "Kieran", "Mark", "Jimmy", "Waldo", "Peter"];

console.log(friend(friends));
