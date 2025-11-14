import { Transaction, updateHistorical, updateBalance, getBalance } from "./account.js";

const dealType = document.querySelector("#tipoTransacao")! as HTMLInputElement;
const value = document.querySelector("#valor")! as HTMLInputElement;
const date = document.querySelector("#data")! as HTMLInputElement;

function operation() {
	let newBalance: number;
	if (dealType.value === "Depósito") {
		newBalance = deposit();
	} else {
		newBalance = 0;
	}

	updateBalance(newBalance);
	const newTransaction = new Transaction(date.value, parseFloat(value.value), dealType.value);
	updateHistorical(newTransaction);
}

function deposit() {
    const balance: number = getBalance();
	return balance + parseFloat(value.value);
}


export { operation };