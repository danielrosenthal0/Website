//initial variables
let gridSize = 16;
let squareSize = (600 / gridSize);
squareSize = squareSize.toString() + "px";




//creating grid of divs
function createGrid(size) {
    const container = document.querySelector('#container');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = (i*size) + j;
            cell.style.border = 'solid';
            cell.style.width = squareSize;
            cell.style.height = squareSize;
            cell.style.margin = '1px';
            cell.style.borderRadius = '4px';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
createGrid(gridSize);
applyHover();
applyReset();

//adding event listener for hover
function applyHover() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover',hover);
    })
    
    //hover function
    function hover() {
        this.style.backgroundColor = 'black';
    }
}


//listener for reset button
function applyReset() {
    const reset = document.querySelector('.reset');
    reset.addEventListener('click',resetGrid);
    
    //resets the grid
    function resetGrid() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.style.backgroundColor = 'white';
        })
    }
}


//listener for adjust gridsize
const adjust = document.querySelector('.adjust');
adjust.addEventListener('click',getSize);

//gets size from user
function getSize() {
    gridSize = parseInt(prompt('Select the number of squares for length/height'));
    if (gridSize > 25) {
        alert('Too many squares')
    } else {
        squareSize = (600 / gridSize);
        squareSize = squareSize.toString() + "px";
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.remove();
        })
        createGrid(gridSize);
        applyHover();
        applyReset();
    }
    
}