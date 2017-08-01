var colorsNames = ['Red', 'Blue', 'Yellow', 'Puple'];
for (var index in colorsNames) {
    console.log(colorsNames[index]);
}
console.log("foreach");
colorsNames.forEach(function (element) {
    console.log(element);
});
console.log("for of");
for (var _i = 0, colorsNames_1 = colorsNames; _i < colorsNames_1.length; _i++) {
    var item = colorsNames_1[_i];
    console.log(item);
}
var name = "abcxyz";
for (var _a = 0, name_1 = name; _a < name_1.length; _a++) {
    var n = name_1[_a];
    console.log(n);
}
//# sourceMappingURL=lession16.js.map