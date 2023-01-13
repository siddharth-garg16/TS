"use strict";
let arrNum = [23, 54, 67, 1, 32, 98, 76, 33];
let arrStr = ["sr", "tri", "flip", "lol"];
function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(getRandomElement(arrNum));
console.log(getRandomElement(arrStr));
