var Persons = (function () {
    function Persons(names) {
        this.names = names;
        console.log(this.names);
    }
    Persons.talk = function () {
        console.log("talk");
    };
    Persons.prototype.running = function () {
        console.log("running");
    };
    return Persons;
}());
var p = new Persons("Abc");
Persons.talk();
p.running();
//# sourceMappingURL=lession18.js.map