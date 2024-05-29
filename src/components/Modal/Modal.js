import React from "react";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    
    return (
        <>
            <Backdrop modalClosed={props.modalClosed} />
            <div style={props.modalStyle}  >{props.children}</div>
        </>
    )
}

export default Modal;