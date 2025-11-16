import { operationScheduled } from "./operation.js";

const balance = document.querySelector("#balance")! as HTMLSpanElement;

interface Transactions {
	date: string;
	type: string;
	value: number;
	done: boolean;
}

class Transaction {
	date: string;
	type: string;
	value: number;
	done: boolean;

	constructor(date: string, value: number, type: string, done: boolean) {
		this.date = date;
		this.value = value;
		this.type = type;
		this.done = done;
	}
}

let historical: Transaction[];
let currentBalance: number;

function getBalance(): number {
	const data = localStorage.getItem("balance");
	return data ? JSON.parse(data) : 0;
}

function getHistorical(): Transaction[] {
	const data = localStorage.getItem("historical");
	return data ? JSON.parse(data) : [];
}

function updateHistorical(newTransaction: Transactions) {
	historical.push(newTransaction);
	localStorage.setItem("historical", JSON.stringify(historical));
}

function replaceHistorical(allTransactions: Transaction[]) {
	localStorage.setItem("historical", JSON.stringify(allTransactions));
}

function updateBalance(newBalance: number) {
	currentBalance = newBalance;
	localStorage.setItem("balance", JSON.stringify(currentBalance));
	balance.textContent = `R$ ${currentBalance}`;
}

function loadApp() {
	historical = getHistorical();
	currentBalance = getBalance();
	const showBalance: string = currentBalance.toFixed(2).replace(".", ",");
	balance.textContent = `R$ ${showBalance}`;
}

function isNewDate() {
	const today: string = new Date().toLocaleString("pt-BR", { dateStyle: "short" });
	if (historical != null) {
		const newHistorical:Transaction[] = historical.map((tra) => {
			if (today === tra.date) {
				if (tra.done === false) {
					operationScheduled(tra.value, tra.type);
					tra.done = !tra.done;
					return tra;
				}
			}
			return tra;
		});
		historical = newHistorical;
		replaceHistorical(newHistorical);
	}
		
}

export { Transaction, getBalance, getHistorical, loadApp, balance, updateHistorical, updateBalance, isNewDate};
