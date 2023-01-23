const container = document.getElementById("container");

function randomNumber (min, max){
    let random = Math.floor(Math.random() * (max - min + 1) ) + min;
    
    return random;
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
   // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";

    // if (cell.innerText == random) {
    //     container.appendChild(cell).classList.add('white-dot')
    // }
  };
};

makeRows(32, 32);