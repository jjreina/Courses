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
    console.log(c); // Out of scoping
}