import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

import './App.css'

export default App =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#08 - Renderização Condicional" color="#30e641">
                <ParOuImpar numero={20}/>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                <UsuarioInfo usuario={{email: 'fee@email.com'}}/>
                <UsuarioInfo usuario={{}}/>
            </Card>
            <Card titulo="#07 - Desafio Tabela Produtos" color="#bbbbbb">
                <TabelaProdutos/>
            </Card>
            <Card titulo="#06 - Repetição" color="#1b3838">
                <ListaAlunos/>
            </Card>
            <Card titulo="#05 - Componente com Filho" color="#d4af37">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
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

