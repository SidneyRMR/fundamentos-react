import './Contador.css'
import { Component } from "react"


class Contador extends Component {
    /* para definir state em cnponentes baseados em classe eu preciso
       criar um objeto, diferente do comp. baseado em função 
       e na hora de carregar os parametros:
       - para o baseado em classe: this.props.numeroInicial
                obs: dentro do constructor não preciso por o this no props
                     mas preciso por o this no state
       - para o baseado em função: props.numeroInicial
       */
        state = {
            numero: this.props.numeroInicial || 0,
            passo: this.props.passoInicial || 5,
        }

        // constructor(props) {
        //     super(props)
        //     /* para o onClick conseguir enxergar a função inc
        //         tenho que criar este contrutor e declarar conforme abaixo */
        //     this.inc = this.inc.bind(this)
        // }
        /* Outra forma bem mais simples de resolver isso é só
        transformar a função em uma função arrow como abaxo */
        inc = () => {
            /* setState é setado automaticamente, serve para 
               atualizar os valores conforme o usuario executa comandos */
            this.setState({
                numero: this.state.numero + this.state.passo,
            })
        }
        dec = () => {
            /* setState é setado automaticamente, serve para 
               atualizar os valores conforme o usuario executa comandos */
            this.setState({
                numero: this.state.numero - this.state.passo,
            })
        }

        setPasso = (e) => {
            this.setState({
                passo: +e.target.value,
            })
        }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                {/* sempre que uso componentes baseados em classe eu preciso usar o this antes das variaveis */}
                <p>{this.state.numero}</p>{/* Carrega o state.numero que recebeu o valor passado no App */}
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" 
                           value={this.state.passo} 
                           onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador