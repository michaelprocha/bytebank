import { getBalance, balance } from "./account.js";

function showValue(): void {
	if (balance.textContent === "R$ -------") {
		const showBalance:string = getBalance().toFixed(2).replace('.', ",");
		balance.textContent = `R$ ${showBalance}`;
		return;
	}
	balance.textContent = "R$ -------";
	return;
}

function todayDate(): string {
	const data: string = new Date().toLocaleString("pt-BR", { weekday: "long", month: "2-digit", day: "2-digit", year: "numeric" });
	return data;
}

export { showValue, todayDate };