import React, { useState} from "react";
import IndiretaFilho from './IndiretaFilho'


export default props => {
    // A função useState retorna 2 valores, 1 valor da variavel e outro
    // que é uma função que será usada para alterar o primeiro valor
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState('0')
    const [nerd, setNerd] = useState(false)
    
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{nerd ? 'Verdadeiro': 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}