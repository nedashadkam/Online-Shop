import React, { useState } from 'react';
import './Carousel.css';
import image1 from '../../assets/images/homepage-carousel/carousel-img-1.jpg';
import image2 from '../../assets/images/homepage-carousel/carousel-img-2.jpg';
import image3 from '../../assets/images/homepage-carousel/carousel-img-3.jpg';
import image4 from '../../assets/images/homepage-carousel/carousel-img-4.jpg';
import image5 from '../../assets/images/homepage-carousel/carousel-img-5.jpg';
import image6 from '../../assets/images/homepage-carousel/carousel-img-6.jpeg';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // debugger
    const [img, setImage] = useState(getImageByIndex(0));

    function getImageByIndex(index) {
        const backgroundImagesArray = [image1, image2, image3, image4, image5, image6];
        if (index <= backgroundImagesArray?.length) {
            return backgroundImagesArray[index];
        }

    }

    function increase() {
        setCurrentIndex(currentIndex + 1);
        setImage(getImageByIndex(currentIndex + 1));
        console.log(currentIndex);

    }

    function decrease() {
        setCurrentIndex(currentIndex - 1);
        setImage(getImageByIndex(currentIndex - 1));
    }


    return (
        <div className="carousel-container" style={{backgroundImage:`url(${img})`}}>
             <i className="material-icons left-icon" onClick={decrease}  >arrow_back_ios</i>
            <i className="material-icons right-icon" onClick={increase} >arrow_forward_ios</i>
         </div>
    )
}

export default Carousel;