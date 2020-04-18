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

// Truthy and Falsy Values and Equality Operators
let height = '';

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable is NOT been defined');
}

// Equality operators
let value = 1
if (value === 1) {
    console.log('The === equal operator');
} 

value = '1'
if (value == 1) {
    console.log('The == equal operator');
} 

// Functions declaration
function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear
}

console.log(calculateAge(1979));

// Functions expression
let whatDoYouDo = (job, firstName) => {
    switch (job) {
        case 'teacher':
            return `${firstName} teaches kids to code`;
        case 'driver':
            return `${firstName} drives an uber in Lisbon.`;
        case 'designer': 
            return `${firstName} designs beautiful websites.`;
        default:
            return `${firstName} does something else`;
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
