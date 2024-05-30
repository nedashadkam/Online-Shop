import React, { useState } from 'react';
import './Carousel.css';
import image1 from '../../assets/images/homepage-carousel/carousel-img-1.jpg';
import image2 from '../../assets/images/homepage-carousel/carousel-img-2.jpg';
import image3 from '../../assets/images/homepage-carousel/carousel-img-3.jpg';
import image4 from '../../assets/images/homepage-carousel/carousel-img-4.jpeg';
import image5 from '../../assets/images/homepage-carousel/carousel-img-5.jpg';
import image6 from '../../assets/images/homepage-carousel/carousel-img-6.jpg';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // debugger
    const [img, setImage] = useState(getImageByIndex(0))

    function getImageByIndex(index) {
        const backgroundImagesArray = [image1, image2, image3, image4, image5, image6];
        if (index <= backgroundImagesArray?.length) {
            return backgroundImagesArray[index];
        }

    }

    function increase() {
        if(currentIndex < 5 ){
            setCurrentIndex(currentIndex + 1);
        setImage(getImageByIndex(currentIndex + 1));
        console.log(currentIndex);
        }

        

    }

    function decrease() {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        setImage(getImageByIndex(currentIndex - 1));
        }
        
    }


    return (
        <div className="carousel-container" style={{backgroundImage:`url(${img})`}}>
             <i style={currentIndex==0 ? {opacity: '0'} : {opacity: '1'}} className="material-icons left-icon" onClick={decrease}  >arrow_back_ios</i>
            <i style={currentIndex==5 ? {opacity: '0'} : {opacity: '1'}} className="material-icons right-icon" onClick={increase} >arrow_forward_ios</i>
         </div>
    )
}

export default Carousel;