import { Transaction } from "./account.js";

function showValue(balance: HTMLSpanElement, currentBalance: number): void {
	if (balance.textContent === "R$ -------") {
		balance.textContent = `R$ ${currentBalance.toLocaleString("pt-BR")}`;
		return;
	}
	balance.textContent = "R$ -------";
}

function todayDate(): string {
	const data: string = new Date().toLocaleString("pt-BR", { weekday: "long", month: "2-digit", day: "2-digit", year: "numeric" });
	return data;
}

function getBalance(): number{
	const data = localStorage.getItem("balance");
	return data ? JSON.parse(data) : 0;
}

function getHistorical(): Transaction[]{
	const data = localStorage.getItem("balance");
	return data ? JSON.parse(data) : [];
}

export { showValue, todayDate, getBalance, getHistorical };