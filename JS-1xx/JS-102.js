let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;
// tvoj kod

if(bodovi > 100 || bodovi < 0){
    alert("Netočan broj bodova!");
}
else if(bodovi >= 90 && bodovi <= 100){
    ocjena = 5;
}
else if(bodovi >= 80 && bodovi <= 90){
    ocjena = 4;
}
else if(bodovi >= 65 && bodovi <= 80){
    ocjena = 3;
}
else if(bodovi >= 50 && bodovi <= 65){
    ocjena = 2;
}
else if(bodovi >= 0 && bodovi < 50){
    ocjena = 1;
}

if(ocjena > 1){
    poruka = `Čestitke. Položili ste ovaj kolegij sa ocjenom ${ocjena}.`
}
else {
    poruka = `Nažalost niste položili ovaj kolegij.`
}
console.log(poruka);