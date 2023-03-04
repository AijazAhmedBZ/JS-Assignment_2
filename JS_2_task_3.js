//a.
var a = 4;
if (++a===5) {
    alert("Given condition for variable a is true");
}
//b.
var b = 82;
if (b++===83) {
    alert("Given condition for variable b is true");
}
//c.
var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
} else if (c === 13) {
    alert("Condition 2 is true");
} else if (++c < 14) {
    alert("Condition 3 is true");
} else if (c === 14) {
    alert("Condition 4 is true");
}
//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//e.
if (true) {
    alert("True");
} 
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller then cat");
}