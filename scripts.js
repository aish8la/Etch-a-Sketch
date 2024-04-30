const sketchBox = document.querySelector('.sketchpad');
const clearButton = document.querySelector('#clear-btn');
const colorButton = document.querySelector('#color-btn');
const gridSizeButton = document.querySelector('#grid-btn');
const buttonsDiv = document.querySelector('.button-container');
let numberOfGridsPerAxis;
let sizeOfSketchBox;
let totalNumberOfGrids;
let gridSize;
let currentBrush;
let colorFunction;
let colorChangeButtonText;

colorBtn();
gridCreate(16);

function gridCreate(gridQty) {
    numberOfGridsPerAxis = gridQty;
    sizeOfSketchBox = sketchBox.clientWidth;
    totalNumberOfGrids = numberOfGridsPerAxis**2;
    gridSize = `${sizeOfSketchBox / numberOfGridsPerAxis}px`;
    sketchBox.replaceChildren();
    for (i = 1; i <= totalNumberOfGrids; i++) {
        const grids = document.createElement('div');
        const idName = `grid-${i}`;
        grids.classList.add('grids');
        grids.setAttribute('id', idName);
        grids.setAttribute('style', `height: ${gridSize}; width: ${gridSize}`)
        sketchBox.appendChild(grids);
    }
}



sketchBox.addEventListener('mouseover', event => {
    let hoverGrid = event.target;
    let currentOpacity = window.getComputedStyle(hoverGrid).opacity;
    let newOpacity = Number(currentOpacity) < 1 ? //ternary operator makes sure that the opacity value do not exceed 1
                     (Number(currentOpacity) + 0.10).toFixed(2):
                     1;
    if (hoverGrid.classList.contains('grids')) {
        hoverGrid.style.opacity = `${newOpacity}`;
        colorFunction(hoverGrid);
    }
 
});

buttonsDiv.addEventListener('click', event => {
    let buttonId = event.target.id;
    if (event.target.tagName === "BUTTON") {
        switch (buttonId) {
            case 'clear-btn':
                clearBtn();
                break;
            case 'grid-btn':
                clearBtn();
                gridBtn(gridCreate);
                break
            case 'color-btn':
                colorBtn();
                break;
        }
    }
});

function blackBrush(element) {
    hue = 100;
    saturation = 100;
    lightness = 0;
    element.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%)`;
}

function rainbowBrush(element) {
    hue = Math.floor(Math.random()*360);
    saturation = 100;
    lightness = 50;
    element.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function clearBtn() {
    const gridElements = document.querySelectorAll('.grids');
    for (const gridElement of gridElements) {
        gridElement.style.backgroundColor = 'white';
        gridElement.style.opacity = '0'
    } 
}

function gridBtn(gridFn) {
    let gridNum = Math.floor(Number(prompt('Type the number of grids per axis (Between 10 and 100)')));
    if (gridNum > 100 
        || gridNum < 10 
        || isNaN(gridNum) ) {
        alert('Invalid value (Please type a number between 10 and 100');
        return gridBtn(gridFn);
    }
    gridFn(gridNum);
}

function colorBtn() {
    if (currentBrush !== 'blackBrush') {
        currentBrush = 'blackBrush';
        colorFunction = blackBrush;
        colorButton.textContent = 'Change to Rainbow Brush';
    } else {
        currentBrush = 'rainbowBrush';
        colorFunction = rainbowBrush;
        colorButton.textContent = 'Change to Black Brush';
    }
}
























