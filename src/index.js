import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
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