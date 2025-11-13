const dealType = document.querySelector("#tipoTransacao")! as HTMLInputElement;
const value = document.querySelector("#valor")! as HTMLInputElement;
const date = document.querySelector("#data")! as HTMLInputElement;
const button = document.querySelector(".btn")! as HTMLButtonElement;
const form = document.querySelector("form")! as HTMLFormElement;
const balance = document.querySelector("#balance")! as HTMLSpanElement;
const eye = document.querySelector("#eye")! as HTMLImageElement;
const time = document.querySelector("#date")! as HTMLTimeElement;

const historical: number[] = [];
let currentBalance: number = 10000;

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

function showValue(): void {
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

time.textContent = todayDate();
eye.addEventListener("click", showValue);
form.addEventListener("submit", (e: SubmitEvent) => e.preventDefault());
button.addEventListener("click", () => {
	console.log(balance);
	console.log(time);
});