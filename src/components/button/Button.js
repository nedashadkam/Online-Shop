import React from "react";
import './Button.css';
import PropTypes from 'prop-types'

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

Button.propTypes = {
    btnStyle: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
    // children : PropTypes.arrayOf(PropTypes.element).isRequired
}