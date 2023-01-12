let ID: string | number;

ID = 123;
ID = "123";
// ID = true;

function printID(id : string | number){
    if(id==="string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}