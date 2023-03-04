var number = 5;
var inPut = prompt("Please enter any number between 1 - 10");

if (number == inPut) {
    document.write("Bingo! Correct Answer")    
} else if(number == ++inPut) {
    document.write("Close enough to correct answer")
}    else if(inPut <= 1 && inPut >= 10) {
    document.write("Plesae enter number in valid range")
}    else {
        document.write("Please try again") }