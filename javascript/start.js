import { Transaction, getBalance, balance } from "./account.js";
function showValue() {
    if (balance.textContent === "R$ -------") {
        balance.textContent = `R$ ${getBalance().toLocaleString("pt-BR")}`;
        return;
    }
    balance.textContent = "R$ -------";
    return;
}
function todayDate() {
    const data = new Date().toLocaleString("pt-BR", { weekday: "long", month: "2-digit", day: "2-digit", year: "numeric" });
    return data;
}
export { showValue, todayDate };
//# sourceMappingURL=start.js.map