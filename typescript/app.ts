import { showValue, todayDate } from "./start.js";
import { loadApp, isNewDate } from "./account.js";
import { operation } from './operation.js';
import { renderExtract } from './historical-view.js';

const button = document.querySelector(".btn")! as HTMLButtonElement;
const form = document.querySelector("form")! as HTMLFormElement;
const eye = document.querySelector("#eye")! as HTMLImageElement;
const time = document.querySelector("#date")! as HTMLTimeElement;

loadApp();
time.textContent = todayDate();
eye.addEventListener("click", showValue);
button.addEventListener("click", operation);
form.addEventListener("submit", (e: SubmitEvent) => e.preventDefault());
renderExtract();

setInterval(()=>{
    isNewDate();
    renderExtract();
}, 50000)