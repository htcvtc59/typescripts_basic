var colorsNames = ['Red','Blue','Yellow','Puple'];
for(let index in colorsNames){
    console.log(colorsNames[index]);
}
console.log("foreach");
colorsNames.forEach(element => {
    console.log(element);
});
console.log("for of");
for(let item of colorsNames){
    console.log(item);
}
let name ="abcxyz";
for(let n of name){
    console.log(n);
}
