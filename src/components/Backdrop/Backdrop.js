import React from 'react';
import './Backdrop.css';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
    return (
        <div className="backdrop-style" onClick={props.Closed} ></div>
    )
}

export default Backdrop;

Backdrop.propTypes = {
    Closed: PropTypes.func.isRequired
}