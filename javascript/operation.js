import { Transaction, updateHistorical, updateBalance, getBalance } from "./account.js";
const dealType = document.querySelector("#tipoTransacao");
const value = document.querySelector("#valor");
const date = document.querySelector("#data");
function operation() {
    let newBalance;
    if (dealType.value === "Depósito") {
        newBalance = deposit();
    }
    else {
        newBalance = 0;
    }
    updateBalance(newBalance);
    const newTransaction = new Transaction(date.value, parseFloat(value.value), dealType.value);
    updateHistorical(newTransaction);
}
function deposit() {
    const balance = getBalance();
    return balance + parseFloat(value.value);
}
export { operation };
//# sourceMappingURL=operation.js.map