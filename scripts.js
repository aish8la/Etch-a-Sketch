let debugValue = 'change debugValue to display here';

const sketchBox = document.querySelector('.sketchpad');
let numberOfGridsPerAxis = 10;
let sizeOfSketchBox = sketchBox.clientWidth;
let totalNumberOfGrids = numberOfGridsPerAxis**2;
let gridSize = `${Math.round(sizeOfSketchBox / numberOfGridsPerAxis)}px`;
let brushMode = 'black';

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
    hoverAction(hoverGrid);

});

function hoverAction(element) {
    console.log(element.id);
}
































//for debugging purposes, remove after
const debugTitle = document.querySelector('h1');
debugTitle.textContent = debugValue