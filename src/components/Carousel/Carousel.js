import React , { useState } from 'react';
import './Carousel.css';
import image1 from '../../assets/images/homepage-carousel/carousel-img-1.jpg';
import image2 from '../../assets/images/homepage-carousel/carousel-img-2.jpg';
import image3 from '../../assets/images/homepage-carousel/carousel-img-3.jpg';
import image4 from '../../assets/images/homepage-carousel/carousel-img-4.jpg';
import image5 from '../../assets/images/homepage-carousel/carousel-img-5.jpg';
import image6 from '../../assets/images/homepage-carousel/carousel-img-6.jpeg';

const Carousel = () => {
    const backgroundImagesArray = [image1, image2, image3, image4, image5, image6];
    const x = backgroundImagesArray.length ; // x=4
    const [currentIndex, setCurrentIndex] = useState(0);
    const [photo, setPhoto] = useState(backgroundImagesArray[currentIndex]);
    const [img, setImg] = useState(photo);

    function increase() {
        debugger
        setCurrentIndex(5)
        console.log(currentIndex)

    }

    function decrease() {

    }


    return (
        <div className="container">
            <img src={img} />
            <span className="material-icons home1" onClick={decrease} >arrow_back_ios</span>
            <span className="material-icons home2" onClick={increase}>arrow_forward_ios</span>
        </div>
    )
}

export default Carousel;