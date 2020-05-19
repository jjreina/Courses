//* Function constructor *//
// JS Contractor
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Prototype
Person.prototype.calculateAge = function() {
    console.log(new Date().getFullYear() - this.yearOfBirth);
}


Person.prototype.lastName = 'Smith';

// Workbench
const john = new Person('John', 1990, 'teacher');
const jane = new Person('Jane', 1969, 'designer');
const mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

//* Object create *//
let personProto = {
    calculateAge: function() {
        console.log(new Date().getFullYear() - this.yearOfBirth);       
    }
}

let john_2 = Object.create(personProto);
john_2.name = 'John 2';
john_2.yearOfBirth = 1979;
john_2.job = 'Programer';

let jane_2 = Object.create(personProto, {
    name: { value: 'Jane 2' },
    yearOfBirth: { value: '1982' },
    job: { value: 'designer' },
})

//* Primitives vs objects *//
// Primitives
let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
let obj1 = {
    name: 'John',
    age: 26
};

let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//* Passing function as argument *//
calculateAge = (year) => {
    return new Date().getFullYear() - year;
}

isFullAge = (age) => {
    return age >= 18;
}

arrayCalc = (arr, fn) => {
    let arrRes = [];
    arr.forEach(element => {
        arrRes.push(fn(element));
    });
    return arrRes;
}

let years = [1979, 1980, 1981, 1982, 1983, 2015];
let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
console.log(ages);
console.log(fullAges);

//* Functions returning functions *//
interviewQuestion = (job) => {
    if (job === 'designer') {
        return (name) => {
            console.log(`${name}, can you please explain what UX design is`);
        }
    } else if (job === 'teacher') {
        return (name) => {
            console.log(`What subject do you teach, ${name}?`);
        }
    } else {
        return (name) => {
            console.log(`Hello ${name}, what do you do?`);
            
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mary');

//* Immediately Invoked Function Expression IIFE *//
((goodLuck) => {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//* Closures *//
retirement = (retirementAge) => {
    let text = 'years left until retirement.'
    return (yearOfBirth) => {
        let age = new Date().getFullYear() - yearOfBirth;
        console.log(`${retirementAge - age} ${text}`);
    }
}

let retirementUS = retirement(66);
retirementUS(1990);

retirement(65)(1979);

interviewQuestionClosure = (job) => {
    return (name) => {
        if (job === 'designer') {
            let text = ', can you please explain what UX design is';
            console.log(`${name}${text}`);
        } else if (job === 'teacher') {
            let text = 'What subject do you teach,';
            console.log(`${text} ${name}?`);
        } else {
            let text1 = 'Hello';
            let text2 = ', what do you do?';
            console.log(`${text1} ${name} ${text2}`);
        }
    }    
}

interviewQuestionClosure('designer')('Juan');
let teacherQuestionClosure = interviewQuestionClosure('teacher');
teacherQuestionClosure('Bea');

//* Bind, call and apply *//
let alejandra = {
    name: 'Alejandra',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay}, Ladies and gentlemen! I´m ${this.name}, I´m a ${this.job} and I´m ${this.age} years old.`);
        } else if (style = 'friendly') {
            console.log(`Hey! What´s up? I´m ${this.name}, I´m a ${this.job} and I´m ${this.age} years old. Have a nice ${timeOfDay}.`);
            
        }
    }
};

let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

alejandra.presentation('formal', 'morning');
alejandra.presentation.call(emily, 'friendly', 'afternoon');
alejandra.presentation.apply(emily, ['formal', 'evening']);

let johnFriendly = alejandra.presentation.bind(alejandra, 'friendly');
johnFriendly('morning');
johnFriendly('night');

