import FamiliaMembro from "./FamiliaMembro"

export default props => {
    return (
        <span>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Ana" {...props}/>
            <FamiliaMembro {...props}/>
            <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
        </span>
    )
}