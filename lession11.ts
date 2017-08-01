let displayColor = function (...colors:any[]) {
    for (let i in colors) {
        console.log(colors[i]);
    }
}

displayColor('Red');
displayColor('Red', 'Green');
displayColor('Red', 'Green', 'Blue');