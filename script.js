const divContainer = document.querySelector(".container-one");

const GRIDSIDE = 600;
// let rows = 16;
// let columns = 16;

divContainer.style.height = `${GRIDSIDE}px`;
divContainer.style.width = `${GRIDSIDE}px`;

function createGridBoxes(squaresPerSide = 16) {
  divContainer.innerHTML = "";
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const gridBoxes = document.createElement("div");
    gridBoxes.className = "boxes";

    gridBoxes.style.height = `${GRIDSIDE / squaresPerSide - 2}px`;
    gridBoxes.style.width = `${GRIDSIDE / squaresPerSide - 2}px`;

    gridBoxes.addEventListener("mouseover", changeBoxColor);

    function changeBoxColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      const color = `rgb(${r}, ${g}, ${b})`;
      gridBoxes.style.backgroundColor = color;
    }

    divContainer.appendChild(gridBoxes);
  }
}

createGridBoxes();

const squareButton = document.querySelector(".squares");

squareButton.addEventListener("click", changeSquareNumber);

function changeSquareNumber() {
  const square = Number(prompt("Enter a number"));
  if (isNaN(square) || square <= 0) {
    alert("please input a number greater than 0");
    return;
  }
  createGridBoxes(square);
}
