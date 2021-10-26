let f = " # # # #";
let s = "# # # #";


for(let i = 0; i<8; i++){
    if(i%2 == 0 || i == 0){
        console.log(f);
    }
    if(i%2 != 0 || i == 1){
        console.log(s);
    }
}