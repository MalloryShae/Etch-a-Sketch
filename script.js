let gridWidth = 16
let gridHeight = 16
const grid = document.querySelector(".grid")


const createGrid = function(){
    grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;
}

const createSquares = function(){
  let totalSquares = (gridWidth * gridHeight);
  for (let i=0 ; i < totalSquares; i++){
    gridItem = document.createElement('div');
    gridItem.className = "gridItem";
    gridItem.addEventListener("mouseover", function(){
      let color = document.getElementById("colorPicker").value;
      this.style.backgroundColor = color;
      });
    grid.appendChild(gridItem);
  }
}

createGrid();
createSquares();

const reset = function(){
  gridWidth = prompt("Select a number for the height and width of your next canvas", 16);
  gridHeight = gridWidth;
  createGrid();
  createSquares();
  const squares = document.querySelectorAll('.gridItem');
  squares.forEach(element =>{
    element.style.backgroundColor = "white";
  })

}

document.getElementById("resetButton").addEventListener('click', reset);
