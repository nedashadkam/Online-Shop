import React, { useState, useContext } from "react";
import './Toolbar.css';
import Button from "../../components/button/Button";
import Logo from "../../components/Logo/Logo";
import MenuItems from "../../components/MenuItems/MenuItems";
import MenuItem from '../../components/MenuItem/MenuItem';
import Modal from "../../components/Modal/Modal";
import SignIn from "../../components/SignIn/SignIn";
import Backdrop from "../../components/Backdrop/Backdrop";
import { NotificationContext } from "../Context/NotificationContext";
import ShoppingBoxContent from "../../components/ShoppingBoxContent/ShoppingBoxContent";
import { ShoppingBoxContext } from "../Context/ShoppingBoxContext";
import { SignInContext } from "../Context/SignInContext";
import { Link, Outlet } from "react-router-dom";
import AboutUs from "../../components/ِAboutUs";
import ContactUs from "../../components/ContactUs";


const Toolbar = () => {

    const [showLogInModal, setShowLogInModal] = useState(false);
    const [showHamberger, setShowHamberger] = useState(false);
    const [showShoppingBox, setShowShoppingBox] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);
    const notificationContext = useContext(NotificationContext);
    const { notificationsValue, setNotificationsValue, notificationNumber } = notificationContext;
    const shoppingBoxContext = useContext(ShoppingBoxContext);
    const { shoppingBoxValue, setShoppingBoxValue, itemNumber, setItemNumber } = shoppingBoxContext;
    const { user, setUser } = useContext(SignInContext);

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
        setShowLogInModal(true)
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

    function showAboutUsModal() {
        setShowAboutUs(true)
    }
    function closeAboutUsModal() {
        setShowAboutUs(false)
    }

    function showContactUsModal() {
        setShowContactUs(true)
    }
    function closeContactUsModal() {
        setShowContactUs(false)
    }

    function exit() {
        setUser(null)
        alert('از حساب کاربری خود خارج شدید')
    }

    return (
        <>
            <header className="toolbar">

                <div style={{ color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button btnStyle="btn-style" clicked={user ? exit : showLoginModal} >
                            {
                                user ? 'خروج' : 'ورود / ثبت نام'
                            }

                        </Button>
                        <span className="icon">
                            <i className="material-icons shop" onClick={showShoppingBoxModal}> shopping_basket </i>
                            {itemNumber == 0 ? null : <span className="badge">{itemNumber}</span>}
                        </span>
                        <span className="icon">
                            <Link className="notification-link" to='/notification' ><i className="material-icons notif"> notifications </i></Link>
                            {notificationNumber == 0 ? null : <span className="badge">{notificationNumber}</span>}
                        </span>
                    </div>
                    <Logo />
                </div>

                <nav>
                    <div className="nav-items" >
                        <MenuItems styles={styles1}>
                            <MenuItem link='/' > صفحه اصلی </MenuItem>
                            <MenuItem link='/store' >فروشگاه </MenuItem>
                            <span onClick={showAboutUsModal} >درباره ما </span>
                            <span onClick={showContactUsModal}>تماس با ما </span>
                        </MenuItems>
                    </div>

                    <div className="hamberger-menu">
                        <Button btnStyle='hamberger-btn' clicked={showHambergerMenu} >☰</Button>
                        <div style={showHamberger ? { transform: 'translateX(0)' } : { transform: 'translateX(100vw)' }} className="hamberger-menu-items">
                            <Logo />
                            <MenuItems>
                                <MenuItem link='/' > صفحه اصلی </MenuItem>
                                <MenuItem link='/store' >فروشگاه </MenuItem>
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
                showShoppingBox ? <Modal modalStyle='shopping-box-modal' Closed={closeShoppingBoxModal}> <ShoppingBoxContent /> </Modal> : null
            }
            {
                showAboutUs ? <Modal modalStyle='log-in-modal' Closed={closeAboutUsModal}> <AboutUs /> </Modal> : null
            }
            {
                showContactUs ? <Modal modalStyle='log-in-modal' Closed={closeContactUsModal}> <ContactUs /> </Modal> : null
            }
            <Outlet />
        </>
    )
}

export default Toolbar;