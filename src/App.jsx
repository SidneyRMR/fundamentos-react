import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default () =>
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={10} max={50} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com parâmetro">
            <ComParametro
                titulo="Situação do aluno"
                aluno="Pedro"
                nota={5.50} />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>

