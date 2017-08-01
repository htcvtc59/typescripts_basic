var Personal = (function () {
    function Personal(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Personal;
}());
var Personals = (function () {
    function Personals(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Personals;
}());
var pss = new Personal("Hello", "World");
console.log(pss.fname + pss.lname);
var per = new Personals("Hello", "World2");
console.log(per.fname + per.lname);
//# sourceMappingURL=lession26.js.map