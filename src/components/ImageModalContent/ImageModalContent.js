import React from "react";
import './ImageModalContent.css';

const ImageModalContent = (props) => {
    return (
        <div className="image-modal-container">
            <img className="image-style" src={props.modalImgAddress} />
            <div className="image-information"> 
            <p>{props.itemInformation}</p>
            </div>
        </div>
    )
}

export default ImageModalContent;