import React, { useState } from "react";
import './Toolbar.css';
import Button from "../../components/button/Button";
import Logo from "../../components/Logo/Logo";
import MenuItems from "../../components/MenuItems/MenuItems";
import MenuItem from '../../components/MenuItem/MenuItem';
import Modal from "../../components/Modal/Modal";
import SignIn from "../../components/SignIn/SignIn";
import Backdrop from "../../components/Backdrop/Backdrop";

const Toolbar = () => {
    const [showModal, setShowModal] = useState(false);
    function show() {
        setShowModal(true);
    }
    function modalClosed() {
        setShowModal(false);
    }

    const modalStyle = {
        backgroundColor: 'rgb(248, 248, 248)',
        position: 'fixed',
        zIndex: '1000',
        boxSizing: 'border-box',
        width: '24%',
        height: 'auto',
        padding: '20px',
        left: '38%',
        top: '25%',
        border: '1px solid rgb(167, 167, 167)',
        boxShadow: 'rgb(59 59 59) 0px 0px 35px 3px',
        borderRadius: '10px',
    }
    const [showHamberger, setShowHamberger] = useState(false);
    function showHambergerMenu () {
        setShowHamberger(true)
    }
    function closeHambergerMenu () {
        setShowHamberger(false)
    }
    return (
        <>
            <header className="toolbar">
                <div style={{ color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button btnStyle="btn-style" clicked={show} >
                            ورود | عضویت
                        </Button>
                        <i className="material-icons"> shopping_basket </i>
                    </div>
                    <Logo />
                </div>
                <nav>
                    <div className="nav-items" >
                        <MenuItems>
                            <MenuItem link='/' > صفحه اصلی </MenuItem>
                            <MenuItem link='/store' >فروشگاه </MenuItem>
                            <span>درباره ما </span>
                            <span>تماس با ما </span>
                        </MenuItems>
                    </div>
                    <div className="hamberger-menu">
                    <Button btnStyle='hamberger-btn' clicked={showHambergerMenu} >☰</Button>
                    <div style={showHamberger? {transform: 'translateX(0)'} : {transform: 'translateX(100vw)'}} className="hamberger-menu-items">
                    <MenuItems>
                            <MenuItem link='/' > صفحه اصلی </MenuItem>
                            <MenuItem link='/store' >فروشگاه </MenuItem>
                            <span>درباره ما </span>
                            <span>تماس با ما </span>
                        </MenuItems>
                    </div>
                    </div>
                    <div style={showHamberger? {display: 'block'} : {display: 'none'}}>
                        <Backdrop Closed={closeHambergerMenu} />
                    </div>
                </nav>
            </header>
            {
                showModal ? <Modal modalStyle={modalStyle} Closed={modalClosed}> <SignIn /> </Modal> : null
            }
        </>
    )
}

export default Toolbar;