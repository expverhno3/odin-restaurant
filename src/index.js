import {addTitle, addReview, addInfo} from "./pageload";
import "./style.css";

const homeBtn = document.querySelector("button.home");
const menuBtn = document.querySelector("button.menu");
const aboutBtn = document.querySelector("button.about");

// for init debug
homeBtn.addEventListener("click", (event) => {
  console.log("you are clicking home button!");
});

addTitle("Hi, Welcome to HNO3's Restaurant")
addReview("this is the best restaurant I ever met for my entire life!")
addInfo([[8,8],[8,8],[6,6],[5,5],[4,4]])