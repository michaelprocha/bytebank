import { Transaction, updateHistorical, updateBalance, getBalance } from "./account.js";
import { renderExtract } from './historical-view.js';
const dealType = document.querySelector("#tipoTransacao");
const value = document.querySelector("#valor");
const date = document.querySelector("#data");
function operation() {
    const value = formatValue();
    const dateTransaction = formatDate();
    const today = new Date().toLocaleString("pt-BR", { dateStyle: "short" });
    if (today === dateTransaction) {
        let newBalance;
        if (dealType.value === "Depósito") {
            newBalance = deposit(value);
        }
        else {
            newBalance = transferAndPayment(value);
        }
        updateBalance(newBalance);
        const newTransaction = new Transaction(dateTransaction, value, dealType.value, true);
        updateHistorical(newTransaction);
    }
    else {
        const newTransaction = new Transaction(dateTransaction, value, dealType.value, false);
        updateHistorical(newTransaction);
    }
    renderExtract();
}
function operationScheduled(value, type) {
    let newBalance;
    if (type === "Depósito") {
        newBalance = deposit(value);
    }
    else {
        newBalance = transferAndPayment(value);
    }
    updateBalance(newBalance);
}
function deposit(value) {
    const balance = getBalance();
    return balance + value;
}
function transferAndPayment(value) {
    const balance = getBalance();
    return balance - value;
}
function formatDate() {
    const year = date.value.substring(0, 4);
    const month = date.value.substring(5, 7);
    const day = date.value.substring(8);
    return `${day}/${month}/${year}`;
}
function formatValue() {
    return parseFloat(value.value);
}
export { operation, operationScheduled };
//# sourceMappingURL=operation.js.map