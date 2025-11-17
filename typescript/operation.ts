import { Transaction, updateHistorical, updateBalance, getBalance } from "./account.js";
import { renderExtract } from './historical-view.js';

const dealType = document.querySelector("#tipoTransacao")! as HTMLInputElement;
const value = document.querySelector("#valor")! as HTMLInputElement;
const date = document.querySelector("#data")! as HTMLInputElement;

function operation() {
	const value: number = formatValue();
	const dateTransaction: string = formatDate();
	const today: string = new Date().toLocaleString("pt-BR", { dateStyle: "short" });

	if (today === dateTransaction) {
		let newBalance: number;
		if (dealType.value === "Depósito") {
			newBalance = deposit(value);
		} else {
			newBalance = transferAndPayment(value);
		}
		updateBalance(newBalance);
		const newTransaction = new Transaction(dateTransaction, value, dealType.value, true);
		updateHistorical(newTransaction);
	} else {
		const newTransaction = new Transaction(dateTransaction, value, dealType.value, false);
		updateHistorical(newTransaction);
	}
	renderExtract();
}

function operationScheduled(value: number, type: string) {
	let newBalance: number;
	if (type === "Depósito") {
		newBalance = deposit(value);
	} else{
		newBalance = transferAndPayment(value);
	}
	updateBalance(newBalance);
}

function deposit(value: number): number {
	const balance: number = getBalance();
	return balance + value;
}

function transferAndPayment(value: number): number{
	const balance: number = getBalance();
	return balance - value;
}

function formatDate(): string {
	const year: string = date.value.substring(0, 4);
	const month: string = date.value.substring(5, 7);
	const day: string = date.value.substring(8);
	return `${day}/${month}/${year}`;
}

function formatValue(): number {
	return parseFloat(value.value);
}

export { operation, operationScheduled };
