// basic math operators
function add (x,y) {
    return (x + y);
}
function subtract (x,y) {
    return (x - y);
}
function multiply (x,y) {
    return (x * y);
}
function divide (x,y) {
    return (x / y);
}
// testing math operators
console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(5,2));
console.log(divide(15,3));

//operate function
function operate (operand,x,y) {
    if (operand === 'add') {
        return add(x,y);
    } else if (operand === 'subtract') {
        return subtract(x,y);
    } else if (operand === 'multiply') {
        return multiply(x,y);
    } else if (operand === 'divide') {
        return divide(x,y);
    } else {
        return;
    }
}
// testing operate function, passing it a string at the moment and im not sure thats the best strategy
console.log(operate('divide',3,4));