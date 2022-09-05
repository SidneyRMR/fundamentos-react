//Não sei o porque de ele nao dar erro por não importar o React
// import React from 'react'

//Componentes funcionais. Baseados em função.
export default function Primeiro() {
    const msg = 'Seja bem vinda!'
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    )
}