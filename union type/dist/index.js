"use strict";
let ID;
ID = 123;
ID = "123";
// ID = true;
function printID(id) {
    if (id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
