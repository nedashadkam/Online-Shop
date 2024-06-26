import React from "react";
import './Button.css';

const Button = (props) => {
    return (
        <button
            className={props.btnStyle}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default Button;