import { showValue, todayDate } from "./start.js";
import { Transaction, getBalance, getHistorical, loadApp } from "./account.js";
import { operation } from './operation.js';
const button = document.querySelector(".btn");
const form = document.querySelector("form");
const eye = document.querySelector("#eye");
const time = document.querySelector("#date");
loadApp();
time.textContent = todayDate();
eye.addEventListener("click", showValue);
form.addEventListener("submit", (e) => e.preventDefault());
button.addEventListener("click", operation);
//# sourceMappingURL=app.js.map