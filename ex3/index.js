var dolphinsScore = [96, 108, 89]
var koalasScore = [88, 91, 110]

function averageScore(score) {
    let total = 0;
    for (const i of score) {
        total += i;
    }
    return total / score.length;
}
var avgDolphinsScore = averageScore(dolphinsScore);
var avgKoalasScore = averageScore(koalasScore);
console.log(`Dolphins Average Score: ${avgDolphinsScore.toFixed(1)}`);
console.log(`Koalas Average Score: ${avgKoalasScore.toFixed(1)}`);
if (avgDolphinsScore >= 100 && avgKoalasScore >= 100) {
    if (avgDolphinsScore > avgKoalasScore) {
        console.log("Dolphins win the trophy!");
    } else if (avgDolphinsScore < avgKoalasScore) {
        console.log("Koalas win the trophy!");
    } else {
        console.log("It's a draw!");
    }
}
if (avgDolphinsScore >= 100 && avgKoalasScore < 100) {
    console.log("Dolphins win the trophy!");
}
if (avgDolphinsScore < 100 && avgKoalasScore >= 100) {
    console.log("Koalas win the trophy!");
}
if (avgDolphinsScore < 100 && avgKoalasScore < 100) {
    console.log("No team wins the trophy.");
}