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
if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's (${bmiJhon.toFixed(1)})!`);
} else {
    console.log(`Data 2 - John's BMI (${bmiJhon.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`);
}