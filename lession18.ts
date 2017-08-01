class Persons {
    constructor(names) {
        this.names = names;
        console.log(this.names);
    }
    static talk(){
        console.log("talk");
    }
    running(){
         console.log("running");
    }
}
let p = new Persons("Abc");
Persons.talk();
p.running();
