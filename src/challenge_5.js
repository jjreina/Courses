/*
    John´s bills $124, $48, $268, $180 and $42.
    Tips:
        20% of the bill when the bill is less than $50
        15% when the bill is between $50 and $200 
        10% if the bill is more than $200.

    Mark´s bills $77, $375, $110, and $45.
    Tips:
        20% of the bill when the bill is less than $100
        10% when the bill is between $100 and $300 
        25% if the bill is more than $300.
*/

// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
const john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calculateTipsAndBills: function() {
        this.tips = this.bills.map((bill) => {
             let percentage;
             if (bill < 50) {
                 percentage = .2;
             } else if (bill >= 50 && bill <= 200) {
                 percentage = .15;
             } else {
                 percentage = .1;
             }
             return percentage * bill;
         });
         this.finalBills = this.bills.map((bill, index) => {
            return bill + this.tips[index];
         });
         return [this.tips, this.finalBills]
     }
}


// 5. Implement the same functionality as before, this time using Mark's tipping rules
const mark = {
    name: 'Mark',
    bills: [77, 475, 110, 45],
    calculateTipsAndBills: function() {
        this.tips = [];
        this.finalBills = [];
        for (const [index, bill] of this.bills.entries()) {
            let percentage;
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[index] = percentage * bill;
            this.finalBills[index] = this.tips[index] + bill;
        }
        return [this.tips, this.finalBills];
    }
}

// 6. Create a function (not a method) to calculate the average of a given array of tips. 
function tipAverage(tips) {
    return tips.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }) / tips.length;
} 

john.calculateTipsAndBills();
mark.calculateTipsAndBills();

// 7. Calculate the average tip for each family
tipAverageJohn = tipAverage(john.tips);
tipAverageMark = tipAverage(mark.tips);

console.log(john);
console.log(mark);

// 8. Log to the console which family paid the highest tips on average
if (tipAverageJohn > tipAverageMark) {
    console.log(`${john.name}´s family pay the highest tip.`);
} else if (tipAverageJohn < tipAverageMark) {
    console.log(`${mark.name}´s family pay the highest tip.`);
} else {
    console.log(`${john.name} and ${mark.name} pay the same tips`);
}



 
