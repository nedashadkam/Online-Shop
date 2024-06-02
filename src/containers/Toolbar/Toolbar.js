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

    const [showLogInModal, setShowLogInModal] = useState(false);
    const [showHamberger, setShowHamberger] = useState(false);
    const [showShoppingBox, setShowShoppingBox] = useState(false);

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

    function showLoginModal() {
        setShowLogInModal(true);
    }
    function closeLoginModal() {
        setShowLogInModal(false);
    }


    function showHambergerMenu() {
        setShowHamberger(true)
    }
    function closeHambergerMenu() {
        setShowHamberger(false)
    }

    function showShoppingBoxModal() {
        setShowShoppingBox(true)
    }
    function closeShoppingBoxModal() {
        setShowShoppingBox(false)
    }

    return (
        <>
            <header className="toolbar">

                <div style={{ color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button btnStyle="btn-style" clicked={showLoginModal} >
                            ورود و ثبت نام
                        </Button>
                        <i className="material-icons shop" onClick={showShoppingBoxModal}> shopping_basket </i>
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
                showLogInModal ? <Modal modalStyle='log-in-modal' Closed={closeLoginModal}> <SignIn /> </Modal> : null
            }

            {
                showShoppingBox ? <Modal modalStyle='log-in-modal' Closed={closeShoppingBoxModal}> <h1>shopping box</h1> </Modal> : null
            }
        </>
    )
}

export default Toolbar;