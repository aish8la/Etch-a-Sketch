//for debugging purposes, remove after
let debugValue = 'change debugValue to display here';

const sketchBox = document.querySelector('.sketchpad');
const clearButton = document.querySelector('#clear-btn');
const colorButton = document.querySelector('#color-btn');
const gridSizeButton = document.querySelector('#grid-btn');
const buttonsDiv = document.querySelector('.button-container');
let numberOfGridsPerAxis = 10;
let sizeOfSketchBox = sketchBox.clientWidth;
let totalNumberOfGrids = numberOfGridsPerAxis**2;
let gridSize = `${Math.round(sizeOfSketchBox / numberOfGridsPerAxis)}px`;
let colorFunction = blackBrush;
let colorChangeButtonText = 'Change to Rainbow Mode';

colorButton.textContent = colorChangeButtonText;

for (i = 1; i <= totalNumberOfGrids; i++) {
    const grids = document.createElement('div');
    const idName = `grid-${i}`;
    grids.classList.add('grids');
    grids.setAttribute('id', idName);
    grids.setAttribute('style', `height: ${gridSize}; width: ${gridSize}`)
    sketchBox.appendChild(grids);
}

sketchBox.addEventListener('mouseover', event => {
    let hoverGrid = event.target;
    colorFunction(hoverGrid);
});

buttonsDiv.addEventListener('click', event => {
    let buttonId = event.target.id;
    if (event.target.tagName === "BUTTON") {
        switch (buttonId) {
            case 'clear-btn':
                clearBtn();
                break;
            case 'grid-btn':
                gridBtn();
                break
            case 'color-btn':
                colorBtn();
                break;
        }
    }
});

function blackBrush(element) {
    element.style.backgroundColor = 'black';
}

function rainbowBrush(element) {
    red = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function clearBtn() {
    const gridElements = document.querySelectorAll('.grids');
    for (const gridElement of gridElements) {
        gridElement.style.backgroundColor = 'white';
    } 
}




























//for debugging purposes, remove after
const debugTitle = document.querySelector('h1');
debugTitle.textContent = debugValue