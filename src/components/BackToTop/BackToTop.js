import React, { useState } from "react";
import './BackToTop.css';

const BackToTop = () => {
    const [show, setShow] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 110) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    })
    function backToTop() {
        window.scrollTo({ top: 0, behavior: `smooth` })
    }
    return (
        <div className={show ? 'active' : 'deActive'} >
            <i className="material-icons" onClick={backToTop}>expand_less</i>
        </div >
    )
}

export default BackToTop;