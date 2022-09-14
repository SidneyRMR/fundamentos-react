import React, {useState} from "react";
import './Mega.css'
export default props => {
    function gerarNumeros(qde) {
        let numeros = []
        while (numeros.length < qde){
            let numero = parseInt(Math.random() * (60 - 0)) + 1
            if (numeros.includes(numero) ){
            } else {
                numeros.push(numero) 
            }
                var arraySortedosOrdenados = numeros.sort((a, b) => a - b)
    
        }
        return arraySortedosOrdenados // array com 7 números diferentes
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega Sena</h2>
            <h3>{numeros.join(' - ')}</h3>
            <div>
                <label>Qde de números: </label>
                    <input 
                    min="6"
                    max="17"
                    type="number" 
                    value={qtde}
                    onChange={(e) =>  {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}