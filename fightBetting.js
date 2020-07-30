let totalPot = 0;
let fighterPotA = 0;
let fighterPotB = 2;
let fighterA;
let fighterB;
let players=[];


function clearAllPots() {
    totalPot = 0;
    fighterPotA = 0;
    fighterPotB = 0;
}

function printTotalPot() {
    console.log("The total pot is currently $ " + totalPot);
}

function printFighterPotA() {
    console.log("The total pot for fighterPotA is $" + fighterPotA);
}

function printFighterPotB() {
    console.log("The total pot for fighterPotB is $" + fighterPotB);
}

function addToPotA(amount) {
    fighterPotA = fighterPotA + amount;
    totalPot = totalPot + fighterPotA;
    console.log("Added a tottal of $ " + amount + " to fighter pot A");
}

function addToPotB(amount) {
    fighterPotB = fighterPotB + amount;
    totalPot = totalPot + fighterPotB;
    console.log("Added a tottal of $ " + amount + " to fighter pot B");
}

function printFighterA() {
    console.log("Fighter A is " + fighterA);
}

function printFighterB() {
    console.log("Fighter B is " + fighterB);
}

function setFighterA(name) {
    fighterA = name;
}

function setFighterB(name) {
    fighterB = name;
}

function getFighterA() {
    return fighterA;
}

function getFighterB() {
    return fighterB;
}

function createPlayer(name,bet){
var person= {name:name,bet:bet}
}



