// Code your solutions in this file
/* 
for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};

const gifts =["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    };
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    const thankYous = [];
    for (let i = 0; i < names.length; i++) {    
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`,);
        debugger;
    };
    console.log(thankYous);
};
writeCards(["Ada", "Brendan", "Ali"], "Birthday");

*/

function countDown(number) {
    let int = number;
    console.log(int);
    while (int > 0) {
        int--;
        console.log(int);
    };
    debugger;
};

countDown(10);