let price:number;
console.log(price); //undefined - no defined value just declaration
console.log(typeof price);


let value;
console.log(typeof value);
value = null;
console.log(typeof value);

let cost:undefined;
console.log(typeof cost, cost);
cost = 100;

let price2:null;
console.log(typeof price2, price2);
price2 = undefined;

let val: number | undefined | null; //can use all three values