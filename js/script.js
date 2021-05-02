{
    const result = document.querySelector(".js-result");

    const calculateResult = (amount, currency) => {
        const euro = 4.56;
        const gbp = 5.23;
        const usd = 3.77;

        switch(currency.value) {
            case "eur":
                return amount.value / euro;
            case "gbp":
                return amount.value / gbp;
            case "usd":
                return amount.value / usd;
        }
    }

    const updateResultText = (resultAfterCalculate, currency) => {
        if (currency.value === "eur") {
            result.innerText = `${resultAfterCalculate.toFixed(2)} euro`;
        } else if (currency.value === "gbp") {
            result.innerText = `${resultAfterCalculate.toFixed(2)} funtów`;
        } else {
            result.innerText = `${resultAfterCalculate.toFixed(2)} dolarów`;
        }
    }

    const resetForm = (amount, currency) => {
        amount.value = undefined;
        currency.value = "eur";
        result.innerText = `N/A`;
    }

    const init = () => {
        const form = document.querySelector('.js-form');
        const amountOfPLN = document.querySelector(".js-inputAmount");
        const currencyOfBuy = document.querySelector(".js-currencyBuy");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            calculateResult(amountOfPLN, currencyOfBuy);
            updateResultText(calculateResult(amountOfPLN, currencyOfBuy), currencyOfBuy);
        })
        form.addEventListener("reset", (e) => {
            e.preventDefault();
            resetForm(amountOfPLN, currencyOfBuy);
        })
    }

    init();
}