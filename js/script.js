{
    let form = document.querySelector('.js-form');
    let amountOfPLN = document.querySelector(".js-inputAmount");
    let currencyOfBuy = document.querySelector(".js-currencyBuy");
    let result = document.querySelector(".js-result");
    let resultButton = document.querySelector(".js-resultButton");
    let resetButton = document.querySelector(".js-resetButton");
    let euro = 4.56;
    let gbp = 5.23;
    let usd = 3.77;

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