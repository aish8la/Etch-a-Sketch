//for debugging purposes, remove after
let debugValue = 'change debugValue to display here';

const sketchBox = document.querySelector('.sketchpad');
let numberOfGridsPerAxis = 10;
let sizeOfSketchBox = sketchBox.clientWidth;
let totalNumberOfGrids = numberOfGridsPerAxis**2;
let gridSize = `${Math.round(sizeOfSketchBox / numberOfGridsPerAxis)}px`;
let colorFunction = blackBrush;

for (i = 1; i <= totalNumberOfGrids; i++) {
    const grids = document.createElement('div');
    const idName = `grid-${i}`;
    grids.classList.add('grids');
    grids.setAttribute('id', idName);
    grids.setAttribute('style', `height: ${gridSize}; width: ${gridSize}`)
    sketchBox.appendChild(grids);
}

sketchBox.addEventListener('mouseover', (event)=> {
    let hoverGrid = event.target;
    colorFunction(hoverGrid);

});

function blackBrush(element) {
    element.style.backgroundColor = "black";
}

function rainbowBrush(element) {
    red = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}






























//for debugging purposes, remove after
const debugTitle = document.querySelector('h1');
debugTitle.textContent = debugValue