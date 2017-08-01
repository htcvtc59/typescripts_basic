class Personal {
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
}
class Personals {
    constructor(public fname: string, public lname: string) {

    }
}
var pss = new Personal("Hello", "World");
console.log(pss.fname + pss.lname);
var per = new Personals("Hello", "World2");
console.log(per.fname + per.lname);

