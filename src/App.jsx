import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () =>
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Aleatorio 
            min = {10}
            max = {50}/>
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={5.50} />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Maria"
            nota={9.9} />
        <Primeiro></Primeiro>
    </div>

