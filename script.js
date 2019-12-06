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

//WORKING ON TRYING TO GET THE GRID SQURES TO FILL COLOR SELECTED - LOOK AT ADDING THE LISTENER TO THE PARENT CONTAINER AND THEN IF IT ALSO MATCHES THE GRID ITEM COLOR IT?
