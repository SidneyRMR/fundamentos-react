import React from "react";
import DiretaFilho from './DiretaFilho'
export default props => {
    return (
        <div>
            <DiretaFilho nome="Ana" idade={10} nerd={true}/>
            <DiretaFilho nome="Junior" idade={12} nerd={true}/>
            <DiretaFilho nome="Gabriel" idade={17} nerd={false}/>
        </div>
    )
}