// Scoping
first();
var a = 'Hello!';
function first() {
    var b = 'Hi'
    second();
    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    // console.log(c); // Out of scoping
    console.log(a + d); // Right scope
    
}

// The this keyword
console.log(this);

calculateAge(1979);

function calculateAge(year) {
    console.log(new Date().getFullYear() - year);
    console.log(this);
}

john = {
    name: 'John',
    yearOfBirth: 1979,
    calculateAge: function() {
        console.log(this);
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();