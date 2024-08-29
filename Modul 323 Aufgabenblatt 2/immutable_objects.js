const myNumber= 42;

const person = {
    FirstName: "Nezir Emre",
    LastName: "Sen",
    Birthday: 2007
};
console.log(person)

const person2 = {
    ...person,
    Birthday: 2006,

}
console.log(person2)


const person3 = {
    FirstName: "Nezir Emre",
    LastName: "Sen",
    Birthday: 2007,
    School: "CsBe"
};

const Delete = (({ School, ...rest }) => rest)(person3);

console.log(person3)
console.log(Delete)






