import { showValue, todayDate, getBalance, getHistorical } from "./start.js";
import { Transaction } from "./account.js";
const dealType = document.querySelector("#tipoTransacao");
const value = document.querySelector("#valor");
const date = document.querySelector("#data");
const button = document.querySelector(".btn");
const form = document.querySelector("form");
const eye = document.querySelector("#eye");
const time = document.querySelector("#date");
const balance = document.querySelector("#balance");
const historical = getHistorical();
let currentBalance = getBalance();
balance.textContent = `R$ ${currentBalance}`;
console.log(historical);
time.textContent = todayDate();
eye.addEventListener("click", () => showValue(balance, currentBalance));
form.addEventListener("submit", (e) => e.preventDefault());
button.addEventListener("click", () => {
    console.log(time);
});
//# sourceMappingURL=app.js.map