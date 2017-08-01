function greenPerson(name: string) {
    let greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }
    console.log(greet);

}
greenPerson("Chandler");
var a = 1;
let b = 3;
if (a === 1) {
    let b = 10;
    var a = 20;
}
console.log(a);
console.log(b);