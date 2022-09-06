import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import './App.css'

export default () =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#05 - Componente com Filho" color="#d4af37">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#8f83d8">
                <Aleatorio min={10} max={50} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#ffb6c1">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com parâmetro" color="#191970">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={5.50} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#51074a">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

