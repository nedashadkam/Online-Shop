import React from 'react';
import './Backdrop.css';
// const Backdrop=(props)=>(
//     props.show?<div className="backdrop-style" onClick={props.modalClosed} >{props.children}</div>:null
// )

const Backdrop = (props) => {
    return (
        <div className="backdrop-style" onClick={props.Closed} ></div>
    )
}
export default Backdrop;