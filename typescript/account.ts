const balance = document.querySelector("#balance")! as HTMLSpanElement;

interface Transactions {
	date: string;
	type: string;
	value: number;
}

let historical: Transaction[];
let currentBalance: number;

class Transaction {
	date: string;
	type: string;
	value: number;

	constructor(date: string, value: number, type: string) {
		this.date = date;
		this.value = value;
		this.type = type;
	}
}

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
	localStorage.setItem('historical', JSON.stringify(historical));
}

function updateBalance(newBalance: number){
	currentBalance = newBalance;
	localStorage.setItem('balance', JSON.stringify(currentBalance));
	balance.textContent = `R$ ${currentBalance}`;
}

function loadApp() {
	historical = getHistorical();
	currentBalance = getBalance();
	balance.textContent = `R$ ${currentBalance}`;
}

export { Transaction, getBalance, getHistorical, loadApp, balance, updateHistorical, updateBalance };
