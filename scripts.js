const convertButton = document.querySelector(".convert-button") 
const convertedCurrency = document.querySelector(".converted-currency")

function convertValue(){
const enterValuesInput = document.querySelector(".enter-values-input").value
const valueToConvert = document.querySelector(".value-to-convert")
const valueAlreadyConverted = document.querySelector(".value-already-converted")

console.log(convertedCurrency.value)

const dolarToday = 6.06
const euroToday = 6.25
const libraToday = 7.44
const bitcoinToday = 626120.83

if(convertedCurrency.value == "dolar"){
    valueAlreadyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(enterValuesInput / dolarToday)
}

if(convertedCurrency.value == "euro"){
    valueAlreadyConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(enterValuesInput / euroToday)
}

if(convertedCurrency.value == "libra"){
    valueAlreadyConverted.innerHTML = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(enterValuesInput / libraToday)
}

if(convertedCurrency.value == "bitcoin"){
    valueAlreadyConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "BTC" }).format(enterValuesInput / bitcoinToday)
}

valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(enterValuesInput)

}

function changeCurrency(){
    const nameCoin = document.querySelector(".name-coin-converted")
    const flagCoin = document.querySelector(".image-flag-coin")

if(convertedCurrency.value == "dolar"){
    nameCoin.innerHTML = "US Dollar"
    flagCoin.src = "./assets/usa.png"
}

if(convertedCurrency.value == "euro"){
    nameCoin.innerHTML = "Euro"
    flagCoin.src = "./assets/euro.png"
}

if(convertedCurrency.value == "libra"){
    nameCoin.innerHTML = "Pound Sterling"
    flagCoin.src = "./assets/libra.png"
}

if(convertedCurrency.value == "bitcoin"){
    nameCoin.innerHTML = "Bitcoin"
    flagCoin.src = "./assets/bitcoin.png"
}
convertValue()

}

convertedCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)