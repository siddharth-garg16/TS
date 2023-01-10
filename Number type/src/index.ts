// let year:number = 2022;
// console.log(year);

// let cost:number = 20.22;
// console.log(cost);

let myBits:number = 0b100; //4
console.log(myBits)

let octals:number = 0o100; //64
console.log(octals);

let hexa:number = 0x100; //256
console.log(hexa);

let myBigInt:number = 9007199254740991; //2^53-1
console.log(myBigInt);

//Number vs number
//number is a premetive datatype whereas Number is a wrapper object around that number.
let value = 100; //premetive number
let otherVal = new Number(100); //Number object
console.log(value, otherVal); //use case for Number is that we have lots of functions for Number e.g. Number.MAX_INT...etc.

