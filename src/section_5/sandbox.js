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


