import React, { useState } from "react";
import './Toolbar.css';
import Button from "../../components/button/Button";
import Logo from "../../components/Logo/Logo";
import MenuItems from "../../components/MenuItems/MenuItems";
import MenuItem from '../../components/MenuItem/MenuItem';
import Modal from "../../components/Modal/Modal";
import SignIn from "../../components/SignIn/SignIn";

const Toolbar = () => {
    const [showModal, setShowModal] = useState(false);
    function show() {
        setShowModal(true);
    }
    function modalClosed() {
        setShowModal(false);
    }
    return (
        <>
            <header className="toolbar">
                <div style={{ color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button btnStyle="btn-log-in" clicked={show} >
                            ورود | عضویت
                        </Button>
                        <span className="material-icons"> store </span>
                    </div>
                    <Logo />
                </div>
                <nav>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <MenuItems>
                            <MenuItem link='/' > صفحه اصلی </MenuItem>
                            <MenuItem link='/store' >فروشگاه </MenuItem>
                            <span>درباره ما </span>
                            <span>تماس با ما </span>
                        </MenuItems>
                    </div>
                </nav>
            </header>
            {
                showModal ? <Modal modalClosed={modalClosed}> <SignIn /> </Modal> : null
            }
        </>
    )
}

export default Toolbar;