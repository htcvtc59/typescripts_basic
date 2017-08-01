interface IPerson {
    fname: string,
    lname: string,
    age: number,
    old?: number
}
var personinterface: IPerson = {
    fname: "Hello",
    lname: "Hi",
    age: 10
}
var personinterface2: IPerson = {
    fname: "Hello2",
    lname: "Hi2",
    age: 13
}
function printinterface(IPersonObj:IPerson){
    console.log(IPersonObj.fname+"\n"+IPersonObj.lname+"\n"
    +IPersonObj.age);
}
printinterface(personinterface);
printinterface(personinterface2);