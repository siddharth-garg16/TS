"use strict";
// function sum(a:number, b:number):void{
//     let c = a+b;
// } //correct
function sum(a, b) {
    let c = a + b;
}
function errorMsg(message) {
    throw new Error("Error here");
    console.log(message);
}
function printMsg(message) {
    while (true) {
        console.log(message);
    }
}
