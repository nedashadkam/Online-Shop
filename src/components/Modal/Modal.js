import React from "react";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    
    return (
        <>
            <Backdrop Closed={props.Closed} />
            <div style={props.modalStyle}  >{props.children}</div>
        </>
    )
}

export default Modal;