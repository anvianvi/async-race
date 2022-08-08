import { getCars } from "./api";
import {
  navButtons,
  racePageActionBar,
  racePageField,
  resultsPageContent,
} from "./html-components";

export const render = async () => {
  const html = `
  <section class="nav-bar">${navButtons}</section>
  <section class="rase-page active" id="race-block">${racePageActionBar}${racePageField}</section>
  <section class="results-page hide" id ="results-block">${resultsPageContent}</section>
`;

  const root = document.createElement("div");
  root.innerHTML = html;
  document.body.appendChild(root);

  const toGarage = document.getElementById("to-garage");
  const toWinners = document.getElementById("to-winners");
  const raceBlock = document.getElementById("race-block");
  const resultsBlock = document.getElementById("results-block");

  toGarage.addEventListener("click", async () => {
    raceBlock.classList.remove("hide");
    raceBlock.classList.add("active");
    resultsBlock.classList.remove("active");
    resultsBlock.classList.add("hide");
  });
  toWinners.addEventListener("click", () => {
    raceBlock.classList.add("hide");
    raceBlock.classList.remove("active");
    resultsBlock.classList.add("active");
    resultsBlock.classList.remove("hide");
  });

  console.log(getCars(1, 3));
};

render();
