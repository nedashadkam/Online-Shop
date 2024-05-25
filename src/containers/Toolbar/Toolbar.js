import React from "react";
import './Toolbar.css';
import Button from "../../components/button/Button";
import Logo from "../../components/Logo/Logo";

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div style={{ color: 'white' }}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button btnStyle="btn-log-in" >
                        ورود | عضویت
                    </Button>
                    <span className="material-icons"> store </span>
                    <span className="material-icons"> search </span>
                </div>
                <Logo/>
            </div>
            <nav></nav>
        </div>
    )
}

export default Toolbar;