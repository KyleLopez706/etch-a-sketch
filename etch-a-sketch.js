function makeGrid(size) {

let gridContainer = document.getElementById('myGrid');
gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size;

for(let i = 0; i < amount; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
       

        gridContainer.appendChild(gridItem);
    
    }
    attachEventListeners()
}

makeGrid(16);


function attachEventListeners() {
const random=() => Math.floor(Math.random() * (255 + 1))
const hoverDivs = [...document.querySelectorAll('.grid-item')];

let changeColor = false;

hoverDivs.forEach(hoverDiv => {
 hoverDiv.addEventListener('mousedown', () => {
  hoverDiv.style.backgroundColor = `rgb(${new Array(3).fill('').map(v=>random()).join(',')})`
    changeColor=true;
 });
 
 hoverDiv.addEventListener('mouseup', () => {
   changeColor=false;
 });
 
 hoverDiv.addEventListener('mouseover', () => {
  if(changeColor){
    hoverDiv.style.backgroundColor = `rgb(${new Array(3).fill('').map(v=>random()).join(',')})`
  }
});
});
}

document.getElementById("button").onclick = function() {
  const newSize = prompt("Enter grid size value");
  if(newSize !== null) {
    setSize(newSize); 
  }
}



function setSize(newSize) {
     if (newSize >= 2 && newSize <= 100) {
    const gridContainer = document.getElementById('myGrid');
    gridContainer.innerHTML = '';
    makeGrid(newSize);
    } 
   else {
    if(newSize !== null) {
   alert("INVALID! Enter 2 - 100 size only") 
     newSize = prompt("Enter grid size value");
    setSize(newSize); 
    }
  }
}  


