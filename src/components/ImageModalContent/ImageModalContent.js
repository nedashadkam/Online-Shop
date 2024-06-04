import React, { useState } from "react";
import './ImageModalContent.css';

const ImageModalContent = (props) => {
    const [imageStyle, setImageStyle] = useState({});

    const mouseMove = (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        setImageStyle({
            transformOrigin: `${x}px ${y}px`,
            transform: 'scale(2)'
        })  
    }

    const mouseLeave = (e) => {
        setImageStyle({
            transformOrigin: 'center center',
            transform: 'scale(1)'
        }) 
    }

    return (
        <div className="image-modal-container">
            <img style={imageStyle} onMouseMove={mouseMove} onMouseLeave={mouseLeave} className="image-style" src={props.modalImgAddress} />
            <div className="image-information">
                <p>{props.itemInformation}</p>
            </div>
        </div>
    )
}

export default ImageModalContent;