import { getHistorical, Transaction } from "./account.js";
const extract = document.querySelector(".registro-transacoes");
function renderExtract() {
    const historical = getHistorical();
    let viewHistorical = "";
    viewHistorical += `<div class="transacoes-group">`;
    if (historical[0]?.date) {
        viewHistorical += `<strong class="mes-group">${verifyMonth(historical[0].date)}</strong>`;
        historical.forEach((trans, i, arr) => {
            if (i > 0) {
                const currentMonth = verifyMonth(trans.date);
                const lastMonth = verifyMonth(arr[i - 1].date);
                if (currentMonth !== lastMonth) {
                    console.log(currentMonth);
                    console.log(lastMonth);
                    viewHistorical += `</div>`;
                    viewHistorical += `<div class="transacoes-group">`;
                    viewHistorical += `<strong class="mes-group">${verifyMonth(trans.date)}</strong>`;
                }
            }
        });
    }
    viewHistorical += `</div>`;
    extract.innerHTML = viewHistorical;
    if (historical[0]) {
        const group = Array.from(document.querySelectorAll(".transacoes-group"));
        const months = Array.from(document.querySelectorAll(".transacoes-group .mes-group"));
        historical.forEach((trans, i) => {
            const date = verifyMonth(trans.date);
            viewHistorical = "";
            viewHistorical += `<div class="transacao-item">
	                                <div class="transacao-info">
	                                    <span class="tipo">${trans.type}</span>
	                                    <strong class="valor">R$ ${trans.value}</strong>
	                                </div>
	                                <time class="data">${trans.date.substring(0, 5)}</time>
	                            </div>`;
            months.forEach((month, i) => {
                if (date === month.textContent) {
                    group[i].innerHTML += viewHistorical;
                }
            });
        });
    }
    // if (months) {
    //     months.forEach((month) => {
    //     });
    // }
    // if (historical[0]?.date) {
    //     historical.forEach((trans) => {
    //     });
    // }
    // historical.forEach((trans, i, arr) => {
    // 	if (i > 0) {
    // 		if (trans.date != arr[i - 1]?.date) {
    // 			viewHistorical += `</div>`;
    // 			viewHistorical += `<div class="transacoes-group">`;
    // 			viewHistorical += `<strong class="mes-group">${trans.date}</strong>`;
    // 		}
    // 	}
    // 	if (trans.type === "Depósito") {
    // 		viewHistorical += `<div class="transacao-item">
    //                                 <div class="transacao-info">
    //                                     <span class="tipo">${trans.type}</span>
    //                                     <strong class="valor">R$ ${trans.value}</strong>
    //                                 </div>
    //                                 <time class="data">${trans.date.substring(0, 5)}</time>
    //                             </div>`;
    // 	} else {
    // 		viewHistorical += `<div class="transacao-item">
    //                                 <div class="transacao-info">
    //                                     <span class="tipo">${trans.type}</span>
    //                                     <strong class="valor">- R$ ${trans.value}</strong>
    //                                 </div>
    //                                 <time class="data">${trans.date.substring(0, 5)}</time>
    //                             </div>`;
    // 	}
    // });
}
function verifyMonth(date) {
    const month = date.substring(3, 5);
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