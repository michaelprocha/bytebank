const balance = document.querySelector("#balance");
let historical;
let currentBalance;
class Transaction {
    constructor(date, value, type) {
        this.date = date;
        this.value = value;
        this.type = type;
    }
}
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
    localStorage.setItem('historical', JSON.stringify(historical));
}
function updateBalance(newBalance) {
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
//# sourceMappingURL=account.js.map