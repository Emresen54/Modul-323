const zufallsZahl = Math.floor(Math.random() * 5);
console.log("Zufällige Zahl:", zufallsZahl);

switch (zufallsZahl) {
    case 1:
        console.log("Der Wert der Zahl ist exakt 1");
        break;
    case 3:
        console.log("Der Wert der Zahl ist exakt 3");
        break;
    default:
        console.log("Der Wert der Zahl ist weder 1 noch 3");
        break;
}
