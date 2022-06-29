// basic math operators
function add (x,y) {
    return Number(x) + Number(y);
}
function subtract (x,y) {
    return Number(y) - Number(x);
}
function multiply (x,y) {
    return (x * y);
}
function divide (x,y) {
    return (x / y);
}

//operate function
function operate (operand,x,y) {
    if (operand === '+') {
         answer = add(x,y).toFixed(5);
    } else if (operand === '-') {
         answer = subtract(x,y).toFixed(5);
    } else if (operand === '*') {
         answer = multiply(x,y).toFixed(5);
    } else if (operand === '/') {
         answer = divide(x,y).toFixed(5);
    } else {
        
    }
    const currentDisplay = document.querySelector('.current');
    currentDisplay.innerHTML = answer;
    const previousDisplay = document.querySelector('.previous');
    previousDisplay.innerHTML = previous + " " + operand + " " + current + " =";
    console.log(answer);
    return answer;
    
    
}
// testing operate function, passing it a string at the moment and im not sure thats the best strategy


//creating variables for current and previous numbers
let answer = 0;
let previous = 0;
let current = 0;
let operand = undefined;
let firstIteration = true;
//adding listeners to calculator buttons to show on display, 
//displaying numbers, changing scale on hover but it doesnt work completely yet
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click',displayNumber);
    number.addEventListener('mouseover',scale); //need to fix
})
//when an operator is pressed
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click',moveCurrent);
})
//clear button listener
const clears = document.querySelectorAll('.clear');
clears.forEach((clear) => {
    clear.addEventListener('click',clearNum);
})
//equals /operate listener
const operates = document.querySelectorAll('.equal');
operates.forEach((equal) => {
    equal.addEventListener('click',function() {operate(operand,current,previous);});
})


//displaying a number when the listener is activated
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
//moving the current number to the previous when operation is pressed
//NEED TO STORE THE OPERATOR SOMEHOW TO DO THE MATH, maybe add an id and if statements
function moveCurrent() {
    if (firstIteration === true) {
        previous = current;
        current = 0;
        operand = this.id;
        const previousDisplay = document.querySelector('.previous');
        previousDisplay.innerHTML = previous + " " + this.id;
        const currentDisplay = document.querySelector('.current');
        currentDisplay.innerHTML = current;
        console.log(operand);
        firstIteration = false;
        return previous, operand;
    } else {
        previous = answer;
        current = 0;
        operand = this.id;
        const previousDisplay = document.querySelector('.previous');
        previousDisplay.innerHTML = previous + " " + this.id;
        const currentDisplay = document.querySelector('.current');
        currentDisplay.innerHTML = current;
        console.log(operand);
        firstIteration = false;
        return previous, operand;
    }
    
}
//need to fix
function scale() {
    this.style.scale = '1.2';
}

//clear function
function clearNum() {
    current = 0;
    previous = 0;
    operand = undefined;
    answer = undefined;
    const currentDisplay = document.querySelector('.current');
    currentDisplay.innerHTML = current;

    const previousDisplay = document.querySelector('.previous');
    previousDisplay.innerHTML = previous + this.id;
    
}
console.log(answer);