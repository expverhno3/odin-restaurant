import { addCells, addCellContent } from "./pageload";
import "./style.css";

const homeBtn = document.querySelector("button.home");
const menuBtn = document.querySelector("button.menu");
const aboutBtn = document.querySelector("button.about");

// for init debug
homeBtn.addEventListener("click", (event) => {
  console.log("you are clicking home button!");
  addCells(9);
  addCellContent();
});
