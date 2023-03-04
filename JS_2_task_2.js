var color = prompt("Pleae enter trafic signal color");
if (color == "Red") {
    console.log("Must Stop");
} else if (color == "Yellow") {
    console.log("Ready to move");
} else if (color == "Green") {
    console.log("Move now");
} else {
    console.log("Please input valid color");
}