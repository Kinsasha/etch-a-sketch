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
  if (isNaN(square) || square <= 0 || square > 100) {
    alert("please input a number greater than 0 and less than 100");
    return;
  }
  createGridBoxes(square);
}

const topText = document.querySelector(".toppage");
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

const rgbColors = `rgb(${r}, ${g}, ${b})`;

topText.style.color = rgbColors;

// const gradientMode = document.querySelector(".gradient");

// gradientMode.addEventListener("click", changeToGradient);

// function changeToGradient() {
//   for (let i = 0; i <= 100; i += 10) {
//     const gradBoxes = document.querySelector(".boxes");
//     gradBoxes.addEventListener('mouseover',() => {
//       gradBoxes.style.backgroundColor =
//     });
//   }
// }
