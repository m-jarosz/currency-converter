{
    const form = document.querySelector('.js-form');
    const amountOfPLN = document.querySelector(".js-inputAmount");
    const currencyOfBuy = document.querySelector(".js-currencyBuy");
    const result = document.querySelector(".js-result");
    const resultButton = document.querySelector(".js-resultButton");
    const resetButton = document.querySelector(".js-resetButton");
    const euro = 4.56;
    const gbp = 5.23;
    const usd = 3.77;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let resultOfCalc;
        switch(currencyOfBuy.value) {
            case "eur":
                resultOfCalc = amountOfPLN.value / euro;
                result.innerText = `${resultOfCalc.toFixed(2)} euro`;
                break;

            case "gbp":
                resultOfCalc = amountOfPLN.value / gbp;
                result.innerText = `${resultOfCalc.toFixed(2)} funtów`;
                break;

            case "usd":
                resultOfCalc = amountOfPLN.value / usd;
                result.innerText = `${resultOfCalc.toFixed(2)} dolarów`;
                break;
        }
    })

    form.addEventListener("reset", (e) => {
        e.preventDefault();
        amountOfPLN.value = undefined;
        currencyOfBuy.value = "eur";
        result.innerText = `N/A`;
    })

}