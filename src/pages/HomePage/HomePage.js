import React from "react";
import './HomePage.css';
import Footer from "../../components/Footer/Footer";
import Suggested from "../../components/Suggested/Suggested";
import Carousel from "../../components/Carousel/Carousel";
import BackToTop from "../../components/BackToTop/BackToTop";
import Comments from "../../components/Comments/Comments";

const HomePage = () => {

    return (
        <>
            <main className="homepage-container">
                <Carousel />
                <Suggested />
                <div className="main-buttom">
                    <div>
                        <img src="https://sofaland.ir/wp-content/uploads/2019/07/22414818.svg" alt="" />
                        <span>پرداخت آنلاین</span>
                    </div>
                    <div>
                        <img src="https://sofaland.ir/wp-content/uploads/2019/07/a9286d2f.svg" alt="" />
                        <span>پشتیبانی ۲۴ ساعته</span>
                    </div>
                    <div>
                        <img src="https://sofaland.ir/wp-content/uploads/2019/07/8f570b58.svg" alt="" />
                        <span>تحویل ایمن</span>
                    </div>
                </div>
                <Comments />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default HomePage;