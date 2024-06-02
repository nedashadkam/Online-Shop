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
    const [showHamberger, setShowHamberger] = useState(false);

    const styles1 = {
        width: '100%',
        marginBlock: '0px',
        margin: '7px 20px',
        paddingInlineStart: '0px',
    }

    const styles2 = {
        marginBlockStart: '0',
        marginBlockEnd: '0',
        paddingInlineStart: '0'
    }

    // const modalStyle = {
    //     backgroundColor: 'rgb(248, 248, 248)',
    //     position: 'fixed',
    //     zIndex: '1000',
    //     boxSizing: 'border-box',
    //     width: '24%',
    //     height: 'auto',
    //     padding: '20px',
    //     left: '38%',
    //     top: '100px',
    //     border: '1px solid rgb(167, 167, 167)',
    //     boxShadow: 'rgb(59 59 59 / 80%) 2px 2px 10px 0px',
    //     borderRadius: '10px',
    // }

    
    function show() {
        setShowModal(true);
    }
    function modalClosed() {
        setShowModal(false);
    }

    
    function showHambergerMenu() {
        setShowHamberger(true)
    }
    function closeHambergerMenu() {
        setShowHamberger(false)
    }

    return (
        <>
            <header className="toolbar">
                <div style={{ color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button btnStyle="btn-style" clicked={show} >
                            ورود و ثبت نام
                        </Button>
                        <i className="material-icons shop"> shopping_basket </i>
                        <span className="badge">1</span>
                        <MenuItems styles={styles2}>
                            <MenuItem style={{ padding: '0px', display: 'flex' }} link='/notification' ><i className="material-icons notif"> notifications </i></MenuItem>
                        </MenuItems>
                        <span className="badge">4</span>
                    </div>
                    <Logo />
                </div>
                <nav>
                    <div className="nav-items" >
                        <MenuItems styles={styles1}>
                            <MenuItem link='/' > صفحه اصلی </MenuItem>
                            <MenuItem link='/store' >فروشگاه </MenuItem>
                            <span>درباره ما </span>
                            <span>تماس با ما </span>
                        </MenuItems>
                    </div>
                    <div className="hamberger-menu">
                        <Button btnStyle='hamberger-btn' clicked={showHambergerMenu} >☰</Button>
                        <div style={showHamberger ? { transform: 'translateX(0)' } : { transform: 'translateX(100vw)' }} className="hamberger-menu-items">
                            <Logo />
                            <MenuItems>
                                <MenuItem link='/' > صفحه اصلی </MenuItem>
                                <MenuItem link='/store' >فروشگاه </MenuItem>
                                <span>درباره ما </span>
                                <span>تماس با ما </span>
                            </MenuItems>
                        </div>
                    </div>
                    <div style={showHamberger ? { display: 'block' } : { display: 'none' }}>
                        <Backdrop Closed={closeHambergerMenu} />
                    </div>
                </nav>
            </header>
            {
                showModal ? <Modal  modalStyle='log-in-modal' Closed={modalClosed}> <SignIn /> </Modal> : null
            }
        </>
    )
}

export default Toolbar;