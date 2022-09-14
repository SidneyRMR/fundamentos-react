import './Input.css'
import React, { useState } from "react";

// useState é um tipo de hook
export default  props =>  {
    const [valor, setValor] = useState()

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'block', flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} placeholder='Digite seu Nome'/>
                <input value={valor} readOnly />
                <input value={undefined} />{/* componente não controlado */} 

            </div>
        </div>

    )
}