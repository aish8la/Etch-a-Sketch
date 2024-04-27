let debugValue = 'change debugValue to display here';

const sketchBox = document.querySelector('.sketchpad');
let numberOfGridsPerAxis = 3;
let sizeOfSketchBox = sketchBox.clientWidth;
let totalNumberOfGrids = numberOfGridsPerAxis**2;
let gridSize = `${sizeOfSketchBox / numberOfGridsPerAxis}px`;

for (i = 1; i <= totalNumberOfGrids; i++) {
    const grids = document.createElement('div');
    const className = `grid-${i}`;
    grids.classList.add('grids', className);
    grids.setAttribute('style', `height: ${gridSize}; width: ${gridSize}`)
    sketchBox.appendChild(grids);
}


//use this variable to display the needed value in the title of the page
debugValue = gridSize;






























//for debugging purposes, remove after
const debugTitle = document.querySelector('h1');
debugTitle.textContent = debugValue