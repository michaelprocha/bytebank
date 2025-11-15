import { operationScheduled } from "./operation.js";
const balance = document.querySelector("#balance");
class Transaction {
    constructor(date, value, type, done) {
        this.date = date;
        this.value = value;
        this.type = type;
        this.done = done;
    }
}
let historical;
let currentBalance;
function getBalance() {
    const data = localStorage.getItem("balance");
    return data ? JSON.parse(data) : 0;
}
function getHistorical() {
    const data = localStorage.getItem("historical");
    return data ? JSON.parse(data) : [];
}
function updateHistorical(newTransaction) {
    historical.push(newTransaction);
    localStorage.setItem("historical", JSON.stringify(historical));
}
function replaceHistorical(allTransactions) {
    localStorage.setItem("historical", JSON.stringify(allTransactions));
}
function updateBalance(newBalance) {
    currentBalance = newBalance;
    localStorage.setItem("balance", JSON.stringify(currentBalance));
    balance.textContent = `R$ ${currentBalance}`;
}
function loadApp() {
    historical = getHistorical();
    currentBalance = getBalance();
    const showBalance = currentBalance.toFixed(2).replace(".", ",");
    balance.textContent = `R$ ${showBalance}`;
}
function isNewDate() {
    const today = new Date().toLocaleString("pt-BR", { dateStyle: "short" });
    if (!historical == null) {
        const newHistorical = historical.map((tra) => {
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
export { Transaction, getBalance, getHistorical, loadApp, balance, updateHistorical, updateBalance, isNewDate };
//# sourceMappingURL=account.js.map