const R = require("./rambda.min.js")

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const isNumeric = char => !isNaN(char) && char !== ' ';

const countNumericChars = R.pipe(
  R.split(''),         
  R.filter(isNumeric),  
  R.length              
);

const result = countNumericChars(sentence);

console.log(result); 
