//type inference
var MyName = "Sid";
console.log(typeof MyName);
var year;
console.log(typeof year);
year = 2022;
console.log(typeof year);
//typescript guesses the type of the data and if not defined in the case of year--it took it as any at the declaration and changed it later to number -- called type inference
