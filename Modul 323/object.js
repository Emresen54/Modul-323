const person = {
    name: "Max Mustermann",
    alter: 30,
    adresse: {
        strasse: "Musterstraße 1",
        stadt: "Musterstadt",
        plz: 12345
    }
};

console.log("Name:", person.name);
console.log("Alter:", person.alter);
console.log("Adresse:", person.adresse.strasse, person.adresse.stadt, person.adresse.plz);
