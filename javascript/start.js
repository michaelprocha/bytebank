import { Transaction, getBalance, balance } from "./account.js";
function showValue() {
    if (balance.textContent === "R$ -------") {
        const showBalance = getBalance().toFixed(2).replace('.', ",");
        balance.textContent = `R$ ${showBalance}`;
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