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
let years = [1979, 1980, 1981, 1982, 1983, 2015];

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




