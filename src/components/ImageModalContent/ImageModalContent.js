import React from "react";
import './ImageModalContent.css';
import Button from '../button/Button';

const ImageModalContent = (props) => {
    return (
        <div className="image-modal-container">
            <img className="image-style" src={props.modalImgAddress} />
            <div className="image-information"> 
            <p>{props.itemInformation}</p>
            <Button btnStyle="btn-style" >افزودن به سبد خرید</Button>
            </div>
        </div>
    )
}

export default ImageModalContent;