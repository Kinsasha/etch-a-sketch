const divContainer = document.querySelector(".container-one");

const GRIDSIDE = 600;
const rows = 16;
const columns = 16;

//GRIDSIDE.className = "";

divContainer.style.height = `${GRIDSIDE}px`;
divContainer.style.width = `${GRIDSIDE}px`;

function createGridBoxes() {
  for (let i = 0; i < rows * columns; i++) {
    const gridBoxes = document.createElement("div");
    gridBoxes.className = "boxes";

    gridBoxes.style.height = `${GRIDSIDE / rows - 2}px`;
    gridBoxes.style.width = `${GRIDSIDE / columns - 2}px`;

    divContainer.appendChild(gridBoxes);
  }
}
createGridBoxes();
