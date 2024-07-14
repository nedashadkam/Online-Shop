import React, { useState } from "react";
import './Footer.css';
import enamadImg from '../../assets/images/enamad.png';
import Modal from "../Modal/Modal";
import SignIn from "../SignIn/SignIn";
import ShoppingBoxContent from "../ShoppingBoxContent/ShoppingBoxContent";
import AboutUs from "../ِAboutUs";
import ContactUs from "../ContactUs";


const Footer = () => {
    const [showLogInModal, setShowLogInModal] = useState(false);
    const [showShoppingBox, setShowShoppingBox] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);
    
    
    function showLoginModal() {
        setShowLogInModal(true);
    }
    function closeLoginModal() {
        setShowLogInModal(false);
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

    return (
        <footer className="footer-container">
            <div className="footer-part-1">
                <p> آدرس : تهران کیانشهر خیابان ابرهیمی
                    <i className="material-icons red">place</i>
                </p>
                <p> امور مشتریان 09140741024 - 02144652145
                    <i className="material-icons green">phone</i>
                </p>
            </div>
            <div className="footer-part-2">
                <div className="part-2-1">
                    <p onClick={showAboutUsModal}> درباره ما</p>
                    <p onClick={showContactUsModal}> تماس با ما</p>
                    <p onClick={showLoginModal}> ورود  </p>
                    <p onClick={showShoppingBoxModal}>  سبد خرید</p>
                </div>
                <div className="part-2-2">
                    <img src={enamadImg} />
                </div>
            </div>
            {
                showLogInModal ? <Modal modalStyle='log-in-modal' Closed={closeLoginModal}> <SignIn /> </Modal> : null
            }
            {
                showShoppingBox ? <Modal modalStyle='log-in-modal' Closed={closeShoppingBoxModal}> <ShoppingBoxContent /> </Modal> : null
            }
            {
                showAboutUs ? <Modal modalStyle='log-in-modal' Closed={closeAboutUsModal}> <AboutUs /> </Modal> : null
            }
            {
                showContactUs ? <Modal modalStyle='log-in-modal' Closed={closeContactUsModal}> <ContactUs /> </Modal> : null
            }
           
        </footer>
    )
}

export default Footer;