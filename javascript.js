function createCSSGrid(event){
    const area = document.querySelector(".etch-a-sketch-area");

    const grid = document.createElement("div");
    grid.classList.add("grid");
    area.appendChild(grid);

    let gridRowSizeElement = document.querySelector("#gridRowSize")
    let gridColumnSizeElement = document.querySelector("#gridColumnSize");

    let gridRows = Number(gridRowSizeElement.value);
    let gridColumns = Number(gridColumnSizeElement.value);

    if (!(typeof(gridRows) === "number") || !(gridRows > 0)){
        gridRows = Number(gridRowSizeElement.getAttribute("placeholder"));
    }
    if (!(typeof(gridColumns) === "number") || !(gridColumns > 0)){
        gridColumns = Number(gridColumnSizeElement.getAttribute("placeholder"));
    }

    console.log(`gridRows is ${gridRows}, gridColumns is ${gridColumns}`);

    for (let i=0; i<gridRows * gridColumns; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        grid.appendChild(gridSquare);
    }

    grid.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;

    grid.addEventListener("mouseover", onHoverOverGridSquareChangeColor);

}

function onHoverOverGridSquareChangeColor(event){
    if (event.target.classList.contains("gridSquare")) {
        event.target.classList.add("etched");
    }
}

function deleteCSSGrid(event){
    const childNode = document.querySelector(".grid");
    childNode.parentNode.removeChild(childNode);
}

function settingsSubmitClick(event){
    deleteCSSGrid(event);
    createCSSGrid(event);
}

document.addEventListener("DOMContentLoaded", createCSSGrid);
document.querySelector(".settings-submit").addEventListener("click", settingsSubmitClick);