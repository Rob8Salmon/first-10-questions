let jonSnowHealth = 100;

let boolVersion = Boolean(jonSnowHealth);

let theWinnerIs = "Jamie is the winner.";

let newWinner = theWinnerIs.replace("Jamie", "Jon");

// if (newWinner.inculdes('Jon')) {
//     console.log('replaced Jamie with jon inside  of newWinner variable');
// } else {
//     console.log('does not include given text');
// }

// console.log({ newWinner });

// let newWinnerLower = newWinner = newWinner.toLowerCase();
// console.log ({newWinnerLower});

// var words = newWinnerLower.split(" ");
// console.log({ words });

// let newWinnerKebab = words.join("-");
// console.log({ newWinnerKebab });

// function isJonAlive(){
//     if (jonSnowHealth > 0){
//         console.log(`Jon Snow lives with a health level of ${jonSnowHealth}!`);
//     } else {
//         console.log("Rip Jon Snow");
//     }
// }

// isJonAlive();


// function surpriseAttack(damage) {
//     jonSnowHealth -= damage;
//     isJonAlive()
// }

// surpriseAttack(20);

// surpriseAttack(12);

// surpriseAttack(6);

// function greeting(person1, person2){
//     console.log(`${person1} and ${person2} say hello to each other`);
// }

// greeting("Jon Snow", "Ned Stark");

// function rollDice() {
//     let possibleRolls = [1, 2, 3, 4, 5, 6];
//     let randomRoll = Math.floor(Math.random() * possibleRolls.length);
//     return possibleRolls[randomRoll];
// }

// // let firstRoll = rollDice();
// // let secondRoll = rollDice();

// // console.log(firstRoll, secondRoll);

// function diceMultiplier() {
//     let firstRoll = rollDice();
//     let secondRoll = rollDice();

//     return firstRoll * secondRoll;
// }

// let resultNumber = diceMultiplier();

// console.log(resultNumber);

function example(){
    let value = "here I am";
    return value;
}

console.log(example());