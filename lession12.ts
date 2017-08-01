let displayColors = function (...colors: any[]) {
    for (let i in colors) {
        console.log(colors[i]);
    }
    console.log(colors);
}
let colors = ['Red', 'Green', 'Blue'];
displayColors(colors);