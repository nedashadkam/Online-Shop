import React from "react";
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
import PropTypes from 'prop-types';

const Modal = (props) => {

    return (
        <>
            <Backdrop Closed={props.Closed} />
            <div className={props.modalStyle}   >{props.children}</div>
        </>
    )
}

export default Modal;

Modal.propTypes = {
    Closed: PropTypes.func.isRequired,
    modalStyle: PropTypes.string.isRequired,
    // children : PropTypes.arrayOf(PropTypes.element)

}