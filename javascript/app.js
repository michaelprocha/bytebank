import { showValue, todayDate } from "./start.js";
import { Transaction, getBalance, getHistorical, loadApp, isNewDate } from "./account.js";
import { operation } from './operation.js';
import { renderExtract } from './historical-view.js';
const button = document.querySelector(".btn");
const form = document.querySelector("form");
const eye = document.querySelector("#eye");
const time = document.querySelector("#date");
loadApp();
time.textContent = todayDate();
eye.addEventListener("click", showValue);
button.addEventListener("click", operation);
form.addEventListener("submit", (e) => e.preventDefault());
renderExtract();
setInterval(() => {
    console.log('foi');
    isNewDate();
    renderExtract();
}, 50000);
//# sourceMappingURL=app.js.map