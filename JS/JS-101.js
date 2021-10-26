let a = prompt("Unesi prvi broj");
let b = prompt("Unesi drugi broj");
let c = prompt("Unesi treći broj");
let d = prompt("Unesi četvrti broj");
let maks;

// tvoj kod

let numbers = [a, b, c, d];
maks = 0;

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    if(maks < numbers[i]){
        maks = numbers[i];
    }

}

console.log("Najveći između njih je: " + maks);