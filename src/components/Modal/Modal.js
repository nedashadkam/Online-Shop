import React from "react";
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const Modal = (props) => {

    return (
        <>
            <Backdrop Closed={props.Closed} />
            <div className={props.modalStyle}   >{props.children}</div>
        </>
    )
}

export default Modal;