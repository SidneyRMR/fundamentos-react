import React, {cloneElement} from "react";

export default props => {
    return (
        <span>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i })
                })}
            
        </span>
    )
}