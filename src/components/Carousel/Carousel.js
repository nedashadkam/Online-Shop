import React, { useEffect, useState } from 'react';
import './Carousel.css';
import image1 from '../../assets/images/homepage-carousel/carousel-img-1.jpg';
import image2 from '../../assets/images/homepage-carousel/carousel-img-2.jpg';
import image3 from '../../assets/images/homepage-carousel/carousel-img-3.jpg';
import image4 from '../../assets/images/homepage-carousel/carousel-img-4.jpeg';
import image5 from '../../assets/images/homepage-carousel/carousel-img-5.jpg';
import image6 from '../../assets/images/homepage-carousel/carousel-img-6.jpg';
import WriteText from '../WriteText';

const Carousel = () => {
    const backgroundImagesArray = [image1, image2, image3, image4, image5, image6];
    const imageCount = backgroundImagesArray?.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [img, setImage] = useState(getImageByIndex(0));

    useEffect(() => {
        const imageInterval = setInterval(() => increase(), 5000);
        return () => {
            clearInterval(imageInterval);
        }
    });

    function getImageByIndex(index) {
        if (index < imageCount) {
            return backgroundImagesArray[index];
        }
        return backgroundImagesArray[0];
    }

    function increase() {
        const temp = (currentIndex + 1) >= imageCount ? 0 : currentIndex + 1;
        setCurrentIndex(temp);
        setImage(getImageByIndex(temp));

    }

    function decrease() {
        const temp = (currentIndex - 1) < 0 ? 0 : currentIndex - 1;
        setCurrentIndex(temp);
        setImage(getImageByIndex(temp));
    }

    return (
        <div className="carousel-container" style={{ backgroundImage: `url(${img})` }}>

            <i style={currentIndex == 0 ? { visibility: 'hidden' } : { visibility: 'visible' }} className="material-icons left-icon" onClick={decrease}  >arrow_back_ios</i>
            <div className='carousel-text' ><WriteText /></div>

            <i style={currentIndex == 5 ? { visibility: 'hidden' } : { visibility: 'visible' }} className="material-icons right-icon" onClick={increase} >arrow_forward_ios</i>

        </div>
    )
}

export default Carousel;