{
    const result = document.querySelector(".js-result");
    let currencyRates = [];

    const createRateValues = arr => currencyRates = [...arr];

    const getCurrencyRate = async () => {
        try {
            const url = `http://api.nbp.pl/api/exchangerates/tables/c/today/`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const rates = [
                    data[0].rates[0].ask,
                    data[0].rates[3].ask,
                    data[0].rates[6].ask
                ];
                createRateValues(rates);
            }
        } catch {
            const err = new Error('Coś poszło nie tak');
            console.log(err);
        }
    }

    const calculateResult = (amount, currency) => {
        const euro = currencyRates[1];
        const gbp = currencyRates[2];
        const usd = currencyRates[0];

        switch (currency.value) {
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

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const fetchResult = await getCurrencyRate();
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