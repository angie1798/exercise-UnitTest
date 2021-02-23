// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(7,3)


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}
const fromDollarToEuro = function(valueInDollar){
    // convertimos el valor a euro
    let valueInEuro = valueInDollar / 1.2;
    // returnamos el valor
    return valueInEuro;
}

//de dolar a yen
const fromDollarToYen = function(valueInDollar){
    let valueInYen = fromDollarToEuro(valueInDollar) * 127.9;
    // returnamos el valor
    return valueInYen;
}

//de yen a libra
const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen/127.9)*0.8;
    // returnamos el valor
    return valueInPound;
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };