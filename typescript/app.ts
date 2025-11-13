import { showValue, todayDate, getBalance, getHistorical } from "./start.js";
import { Transaction } from "./account.js";

const dealType = document.querySelector("#tipoTransacao")! as HTMLInputElement;
const value = document.querySelector("#valor")! as HTMLInputElement;
const date = document.querySelector("#data")! as HTMLInputElement;
const button = document.querySelector(".btn")! as HTMLButtonElement;
const form = document.querySelector("form")! as HTMLFormElement;
const eye = document.querySelector("#eye")! as HTMLImageElement;
const time = document.querySelector("#date")! as HTMLTimeElement;
const balance = document.querySelector("#balance")! as HTMLSpanElement;

const historical: Transaction[] = getHistorical();
let currentBalance: number = getBalance();
balance.textContent = `R$ ${currentBalance}`;

console.log(historical);

time.textContent = todayDate();
eye.addEventListener("click", () => showValue(balance, currentBalance));
form.addEventListener("submit", (e: SubmitEvent) => e.preventDefault());
button.addEventListener("click", () => {
	console.log(time);
});