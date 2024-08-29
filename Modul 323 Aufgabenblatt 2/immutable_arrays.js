const person = [
    { id: 1, name: "Emre sen", alter: 17 },
    { id: 2, name: "Max Mustermann", alter: 30 },
];


const newperson = [
    ...person,
    { id: 3, name: "Luis Fernandez", alter: 18},
];

const updateperson = person.map(person =>
    person.id === 2 ? {...person, alter : 26} : person
);


const smallestId = Math.min(...person.map(person => person.id));

const filteredPerson = person.filter(person => person.id !== smallestId);

console.log(person)
console.log(newperson)
console.log(updateperson)
console.log(filteredPerson)

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const summe = reviews.reduce((acc, value) => acc + value, 0);
const Average = summe / reviews.length;

function groupReviews(reviews) {
    return reviews.reduce((acc, value) => {
        if (value >= 4) {
            acc.good += 1;
        } else if (value >= 2.5) {
            acc.ok += 1;
        } else {
            acc.bad += 1;
        }
        return acc;
    }, { good: 0, ok: 0, bad: 0 });
}

const Reviewsgroup = groupReviews(reviews);


console.log("Durchschnitt:", Average);
console.log(Reviewsgroup);