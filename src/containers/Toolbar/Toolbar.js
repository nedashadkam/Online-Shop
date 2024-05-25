import React from "react";
import './Toolbar.css';
import Button from "../../components/button/Button";
import Logo from "../../components/Logo/Logo";
import MenuItems from "../../components/MenuItems/MenuItems";

const Toolbar = () => {
    return (
        <header className="toolbar">
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
            <nav>
                <MenuItems />
            </nav>
        </header>
    )
}

export default Toolbar;