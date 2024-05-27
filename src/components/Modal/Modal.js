import React from "react";
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    
    return (
        <>
            <Backdrop modalClosed={props.modalClosed} />
            <div className="modal-style"  >{props.children}</div>
        </>


    )
}

export default Modal;