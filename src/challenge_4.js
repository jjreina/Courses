/*
    BMI:

    massMark = 78;
    heightMark = 1.69;

    massJohn = 92;
    heightJohn = 1.95;
*/


const john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / Math.pow(this.height, 2);
        return this.bmi;
    }
}

const mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / Math.pow(this.height, 2);
        return this.bmi;
    }
}


if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.name} has the highest BMI.`);
} else if (john.bmi < mark.bmi) {
    console.log(`${mark.name} has the highest BMI.`);
} else {
    console.log(`${john.name} and ${mark.name} have the same BMI`);
    
}

 
