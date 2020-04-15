var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (Math.pow(heightJohn, 2));
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

// The Ternary Operartor
const firstName = ' John';
let age = 16;

age >= 18 ? console.log(`${firstName} drinks bear`) : console.log(`${firstName} drinks juice`);
let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch Statemenrs
const job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(`${firstName} teaches kids how to code.`);
        break;
    case 'driver':
        console.log(`${firstName} drives an uber in Lisbon.`);
        break;
    case 'designer': 
        console.log(`${firstName} designs beautiful websites.`);
        break;
    default:
        console.log(`${firstName} does something else.`);
}

// age = 40;
switch (true) {
    case age < 13:
        console.log(`${firstName} is a boy.`);
        break;
    case age >= 13 && age < 20:
        console.log(`${firstName} is a teenager.`);
        break;
    case age >= 20 && age < 30:
        console.log(`${firstName} is a young man.`);
        break;
    default:
        console.log(`${firstName} is a man.`);
    

}