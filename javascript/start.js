import { Transaction } from "./account.js";
function showValue(balance, currentBalance) {
    if (balance.textContent === "R$ -------") {
        balance.textContent = `R$ ${currentBalance.toLocaleString("pt-BR")}`;
        return;
    }
    balance.textContent = "R$ -------";
}
function todayDate() {
    const data = new Date().toLocaleString("pt-BR", { weekday: "long", month: "2-digit", day: "2-digit", year: "numeric" });
    return data;
}
function getBalance() {
    const data = localStorage.getItem("balance");
    return data ? JSON.parse(data) : 0;
}
function getHistorical() {
    const data = localStorage.getItem("balance");
    return data ? JSON.parse(data) : [];
}
export { showValue, todayDate, getBalance, getHistorical };
//# sourceMappingURL=start.js.map