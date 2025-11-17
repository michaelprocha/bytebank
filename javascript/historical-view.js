import { getHistorical, Transaction } from "./account.js";
const extract = document.querySelector(".registro-transacoes");
function renderExtract() {
    const historical = getHistorical();
    let viewHistorical = "";
    viewHistorical += `<div class="transacoes-group">`;
    if (historical[0]?.date) {
        const months = historical
            .map((trans) => trans.date.substring(3, 5))
            .sort()
            .map((month) => verifyMonth(month, true));
        viewHistorical += `<strong class="mes-group">${months[0]}</strong>`;
        months.forEach((month, i, arr) => {
            if (i > 0) {
                if (month !== arr[i - 1]) {
                    viewHistorical += `</div>`;
                    viewHistorical += `<div class="transacoes-group">`;
                    viewHistorical += `<strong class="mes-group">${month}</strong>`;
                }
            }
        });
        viewHistorical += `</div>`;
    }
    viewHistorical += `</div>`;
    extract.innerHTML = viewHistorical;
    if (historical[0]) {
        const group = Array.from(document.querySelectorAll(".transacoes-group"));
        const months = Array.from(document.querySelectorAll(".transacoes-group .mes-group"));
        historical.forEach((trans) => {
            const date = verifyMonth(trans.date, false);
            viewHistorical = "";
            if (trans.type !== "Depósito") {
                viewHistorical += `<div class="transacao-item">
										<div class="transacao-info">
											<span class="tipo">${trans.type}</span>
											<strong class="valor">- R$ ${trans.value}</strong>
										</div>
										<time class="data">${trans.date.substring(0, 5)}</time>
									</div>`;
            }
            else {
                viewHistorical += `<div class="transacao-item">
										<div class="transacao-info">
											<span class="tipo">${trans.type}</span>
											<strong class="valor">R$ ${trans.value}</strong>
										</div>
										<time class="data">${trans.date.substring(0, 5)}</time>
									</div>`;
            }
            months.forEach((month, j) => {
                if (date === month.textContent) {
                    group[j].innerHTML += viewHistorical;
                }
            });
        });
    }
}
function verifyMonth(date, formated) {
    let month;
    if (!formated) {
        month = date.substring(3, 5);
    }
    else {
        month = date;
    }
    switch (month) {
        case "01":
            return "Janeiro";
        case "02":
            return "Fevereiro";
        case "03":
            return "Março";
        case "04":
            return "Abril";
        case "05":
            return "Maio";
        case "06":
            return "Junho";
        case "07":
            return "Julho";
        case "08":
            return "Agosto";
        case "09":
            return "Setembro";
        case "10":
            return "Outubro";
        case "11":
            return "Novembro";
        case "12":
            return "Dezembro";
    }
    return month;
}
export { renderExtract };
//# sourceMappingURL=historical-view.js.map