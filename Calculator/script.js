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

//creating variables for current and previous numbers

let previous = 0;
let current = 0;
let operand = undefined;
//adding listeners to calculator buttons to show on display, 
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click',displayNumber);
    number.addEventListener('mouseover',scale); //need to fix
})
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click',moveCurrent);
})
function displayNumber() {
    if (current === 0) {
        current = this.id;
    }
    else {
        current = "" + current + this.id;
    }
    const currentDisplay = document.querySelector('.current');
    currentDisplay.innerHTML = current;
    return current;
}
function moveCurrent() {
    previous = current;
    current = 0;
    const previousDisplay = document.querySelector('.previous');
    previousDisplay.innerHTML = previous + this.id;
    const currentDisplay = document.querySelector('.current');
    currentDisplay.innerHTML = current;
    
}
//need to fix
function scale() {
    this.style.scale = '1.2';
}