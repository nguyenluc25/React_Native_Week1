// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

var massMark = 78;
var heighMark = 1.69;
var massJhon = 92;
var heighJhon = 1.95;
var markHigherBMI = false;

function bmi(weight, height) {
    return (weight / height ** 2)
}

var bmiMark = bmi(massMark, heighMark);
console.log("BMi Mark = ", bmiMark);
var bmiJhon = bmi(massJhon, heighJhon);
console.log("BMi Jhon = ", bmiJhon);
if (bmiMark >= bmiJhon) {
    markHigherBMI = true;
} else {
    markHigherBMI = false;
}
console.log("Mark has a higher BMI than John:", markHigherBMI);