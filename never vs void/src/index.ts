// function sum(a:number, b:number):void{
//     let c = a+b;
// } //correct

function sum(a:number, b:number):never{
    let c = a+b;
}

function errorMsg(message:string):never{
    throw new Error("Error here");
    console.log(message);
}

function printMsg(message:string):never{
    while(true){
        console.log(message);
    }
}