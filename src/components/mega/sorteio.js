
function gerarnumeros(qde) {
    let numeros = []
    while (numeros.length < qde){
        numeroAleat = parseInt(Math.random() * (60 - 0)) + 1
        if (numeros.includes(numeroAleat) ){
        } else {
            numeros.push(numeroAleat) 
        }
            arraySortedosOrdenados = numeros.sort((a, b) => a - b)

    }
    return (console.log(arraySortedosOrdenados)) // array com 7 números diferentes
}

gerarnumeros(6)