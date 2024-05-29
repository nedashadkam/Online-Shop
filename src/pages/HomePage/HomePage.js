import React from "react";
import './HomePage.css';
import Footer from "../../components/Footer/Footer";
import Suggested from "../../components/Suggested/Suggested";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
    return (
        <>
            <main className="homepage-container">
                <Carousel />
                <Suggested />
            </main>
            <Footer />
        </>
    )
}

export default HomePage;