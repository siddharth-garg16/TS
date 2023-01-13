class Coordinate {
    protected x: number; //protected can be accessed by member function
    protected y: number; //could be private too -- only accessible in the class

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    public getX(){
        return this.x;
    }
}

const point = new Coordinate(4, 7);

console.log(point.getX());