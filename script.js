
// Get DOM Variables
const grid = document.getElementById("grid");
const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => resetGrid());

// Initial Setup
createGrid(16);

// Functions

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('mouseover', function() {
        cell.classList.add('hover');
    });
    grid.appendChild(cell);
  };
};

function resetGrid() {
    const gridSize = prompt("Input grid size (max: 100):");
    if (gridSize <= 100) {
        grid.innerHTML = '';
        createGrid(gridSize); 
    }
    else {
        alert("Invalid grid size. Try again.");
        resetGrid();
    }
}



