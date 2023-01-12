type Fruit = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
}
type Mango = Fruit & {
    price: number
}//extension is not easier



interface Vegetable {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
}
interface Vegetable {
    price: number
} //extended the interface - easier
interface Potato extends Vegetable {
    texture: string
}//powerful - new interface form previous interface

//we can use ?: to make it optional to exist or not (optional attribute)
// we can add ! at the end of an expression to say that the value definitely exists (non null assertion)