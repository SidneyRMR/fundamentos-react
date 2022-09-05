import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

export default function App(props) {
    return (
        <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={5.50}/>
        <ComParametro 
            titulo="Situação do aluno"
            aluno="Maria"
            nota={9.9}/>
            
    </div>
    )
}