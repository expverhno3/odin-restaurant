const content = document.querySelector("div#content");

export function addCells(numberCells) {
  let i = 0;

  while (i < numberCells) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    content.appendChild(cell);
    i++;
  }
}

export function addCellContent() {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        const cellContent = document.createElement("div");
        cellContent.classList.add("cell-content");
        cellContent.textContent = 'this is some text content within the cell'
        cell.appendChild(cellContent);
    })
}

export function renderPage() {
    addCells(9)
    addCellContent()
}
