// Code your solutions in this file
names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names){
    let cards = [];
    for (let i = 0; i < names.length ; i++ ){
        cards.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return (cards);
}

function countDown(){
    for (let i = 10; i >= 0; i--){
        console.log(i);
    }
}