import React from "react";
import './Footer.css';
import enamadImg from '../../assets/images/enamad.png';

const Footer = () => {
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
                    <p> درباره ما</p>
                    <p> تماس با ما</p>
                    <p> قوانین سایت </p>
                    <p> سوالات متداول</p>
                </div>
                <div className="part-2-2">
                    <p>پیگیر سفارشات من</p>
                    <p> سبد خرید</p>
                    <p> ورود </p>
                    <p>تاریخچه سفارش ها</p>
                </div>
                <div className="part-2-3">
                    <img src={enamadImg} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;