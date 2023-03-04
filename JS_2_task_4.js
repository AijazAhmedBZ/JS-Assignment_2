var totalMarks = 300;
var marksObtained = prompt("Please input marks obtained");
var grade;
var remarks;
if (marksObtained >= 80) {
    grade = ("A-One"); remarks = ("Excellent")
} else if (marksObtained >= 70) {
    grade = ("A"); remarks = ("Good")
} else if (marksObtained >= 60) {
    grade = ("B") ;remarks = ("You need to improve")
} else if (marksObtained < 60) {
    grade = ("Fail"); remarks = ("Sorry")
}

var percentage = marksObtained / totalMarks * 100;

document.write("<h3>Marks Sheet");
document.write("<br>");
document.write("<h5>Total Marks : "+totalMarks);
document.write("<br>Marks Obtained : "+marksObtained);
document.write("<br>Percentage : "+percentage);
document.write("%");
document.write("<br>Grade : "+grade);
document.write("<br>Remarks : "+remarks);
