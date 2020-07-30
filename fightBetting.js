let totalPot=0;
let fighterPotA=0;
let fighterPotB=2;


function clearAllPots(){
    totalPot=0;
    fighterPotA=0;
    fighterPotB=0;
}

function printTotalPot(){
    console.log("The total pot is currently $ "+ totalPot);
}

function printFighterPotA(){
    console.log("The total pot for fighterPotA is $" +fighterPotA);
}

function printFighterPotB(){
    console.log("The total pot for fighterPotB is $" +fighterPotB);
}

function addToPotA(amount){
    fighterPotA=fighterPotA+amount;
    totalPot=totalPot+fighterPotA;
    console.log("Added a tottal of $ "+amount + " to fighter pot A");
}

function addToPotB(amount){
    fighterPotB=fighterPotB+amount;
    totalPot=totalPot+fighterPotB;
    console.log("Added a tottal of $ "+amount + " to fighter pot B");
}

addToPotA(100);
addToPotB(150);
printFighterPotA();
printFighterPotB();
printTotalPot();
addToPotB(150);
printFighterPotB();
addToPotA(1000);
printTotalPot();
