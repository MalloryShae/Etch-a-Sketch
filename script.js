let gridWidth = 16
let gridHeight = 16
const grid = document.querySelector(".grid")

// document.getElementById("createButton").addEventListener("click", function(){
//   gridWidth = document.getElementById("width").value;
//   gridHeight = document.getElementById("height").value;
//   createGrid();
//   fillGrid();
// })

const createGrid = function(){
    grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;
}

const fillGrid = function(){
  let totalSquares = (gridWidth * gridHeight);
  for (let i=0 ; i < totalSquares; i++){
    const gridItem = document.createElement('div');
    gridItem.className = "grid-item"
    grid.appendChild(gridItem);
    console.log("grid item")
  }
}

createGrid();
fillGrid();
