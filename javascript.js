document.addEventListener("DOMContentLoaded", (event) =>{
    const area = document.querySelector(".etch-a-sketch-area");

    let grid = document.createElement("div");
    grid.classList.add("grid")
    area.appendChild(grid)

    let gridRows = 16;
    let gridColumns = 16;

    for (let i=0; i<gridRows * gridColumns; i++){
        const gridSquare= document.createElement("div");
        gridSquare.classList.add("gridSquare");
        grid.appendChild(gridSquare);
    }
});