import { showValue, todayDate } from "./start.js";
import { Transaction, getBalance, getHistorical, loadApp } from "./account.js";
import { operation } from './operation.js';


const button = document.querySelector(".btn")! as HTMLButtonElement;
const form = document.querySelector("form")! as HTMLFormElement;
const eye = document.querySelector("#eye")! as HTMLImageElement;
const time = document.querySelector("#date")! as HTMLTimeElement;

loadApp();
time.textContent = todayDate();
eye.addEventListener("click", showValue);
form.addEventListener("submit", (e: SubmitEvent) => e.preventDefault());
button.addEventListener("click", operation);