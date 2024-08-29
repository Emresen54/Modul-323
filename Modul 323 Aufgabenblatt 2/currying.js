const studentGrades = [
    { name: "Joe", grade: 88 },
    { name: "Jen", grade: 94 },
    { name: "Steph", grade: 77 },
    { name: "Allen", grade: 60 },
    { name: "Gina", grade: 54 }
    ];
    const getGroupedGrade = (student) => {
    if (student.grade >= 90) {
    return `Excellent Job ${student.name}, you got an a`;
    } else if (student.gradestudent >= 80) {
    return `Nice Job ${object.name}, you got a b`;
    } else if (student.grade >= 70) {
    return `Well done ${student.name}, you got a c`;
    } else if (student.grade >= 60) {
    return `What happened ${student.name}, you got a d`;
    } else {
    return `Not good ${student.name}, you got an f`;
    }
    };
    const groupedGrades = studentGrades.map(getGroupedGrade);
    console.log(groupedGrades)


 
const R = require("./rambda.min.js")

  const namen = ["Max", "Erika", "John", "Jane"];

const setzePrefix = R.curry((prefix, name) => `${prefix} ${name}`);

const prefixMitHerr = setzePrefix("Herr");
const prefixMitFrau = setzePrefix("Frau");

const namenMitHerr = R.map(prefixMitHerr, namen);
const namenMitFrau = R.map(prefixMitFrau, namen);

console.log(namenMitHerr); 
console.log(namenMitFrau); 

  


let globalArray = [1, 2, 3, 4, 5];

function getArrayLength() {
    return globalArray.length;
}

console.log(getArrayLength()); 

function getArrayLength(array) {
    return array.length;
}

let myArray = [1, 2, 3, 4, 5];
console.log(getArrayLength(myArray)); 









