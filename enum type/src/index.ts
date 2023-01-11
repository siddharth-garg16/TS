//enum isn't supported by JS

enum weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(weekdays);
console.log(weekdays[2]);
console.log(weekdays.Tuesday);

//we can use string enum and computed enums too
enum faceCards {
    King = "K",
    Queen = "Q",
    Jack = "J"
}
console.log(faceCards);
console.log(faceCards.King);

// enum weekdays {
//     Monday = 1,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday = weekdays.Monday-1
// }
