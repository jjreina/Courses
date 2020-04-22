/*
    Bills $124, $48 y $268
    Tip 20% if the bill is less than $50.
    Tip 15% if the bill is between $50 and $200.
    Tip 10% if the bill is more than $200.
*/
const bills = [124, 48, 268];
console.log(`Bills: ${bills}`);

function calculateTips(arrayBills) {
   return arrayBills.map((bill) => {
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
}

let tips = calculateTips(bills);
console.log(`Tips: ${tips}`);

function calculateFinalBills(arrayBills) {
    return arrayBills.map((bill, index) => {
        return bill + tips[index];
     });
 }

let finalBills = calculateFinalBills(bills);
console.log(`Final bills: ${finalBills}`);
 
