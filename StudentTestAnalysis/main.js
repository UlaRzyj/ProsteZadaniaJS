const students1AT = [
    {name: 'John', score: 90},
    {name: 'Anna', score: 80},
    {name: 'Alex', score: 99},
    {name: 'Maria', score: 95},
    {name: 'George', score: 75},
    {name: 'Mia', score: 99},
    {name: 'Amelia', score: 89},
    {name: 'Michael', score: 44},
    {name: 'Sofia', score: 98},
    {name: 'Johny', score: 56},
    {name: 'Simone', score: 87},
]

const students1BT = [
    {name: "John", score: 90},
    {name: "Anna", score: 23},
    {name: "Alex", score: 100},
    {name: "Maria", score: 89},
    {name: 'George', score: 34},
    {name: 'Mia', score: 89},
    {name: 'Amelia', score: 45},
    {name: 'Michael', score: 100},
    {name: 'Sofia', score: 100},
    {name: 'Johny', score: 78},
    {name: 'Simone', score: 23}
]

function scoreAverage(results) {
    const sum = results.reduce((acc, results) => acc + results.score, 0);
    const average = (sum / results.length).toFixed(2);
    console.log(`Średnia wyników: ${average}`);
}

function lowestScore(results) {
    const lowest = Math.min(...results.map(results => results.score));
    const lowestStudent = results.filter(results => results.score === lowest);
    console.log(`Najniższy wynik -> ${lowest}: `);
    lowestStudent.forEach(student => console.log(student.name));
}

function highestScore(results) {
    const highest = Math.max(...results.map(results => results.score));
    const highestStudent = results.filter(results => results.score === highest);
    console.log(`Najwyższy wynik -> ${highest}: `);
    highestStudent.forEach(student => console.log(student.name));
}

function showResults(results) {
    console.log(`Lista wyników:`);
    results.forEach(student => console.log(`${student.name}, Wynik: ${student.score}`));
}

scoreAverage(students1AT);
scoreAverage(students1BT);

lowestScore(students1AT);
lowestScore(students1BT);

highestScore(students1AT);
highestScore(students1BT);

showResults(students1AT);