import React from "react";
import Button from '../button/Button';
import './ProdactItem.css';

const ProdactItem = (props) => {
    return (
        <div className="prodactItem">
            <div className="image-container">
                <img src={props.imageAddress} />
            </div>
            <span>{props.itemName}</span>
            <span>{props.itemPrice}</span>
            <Button btnStyle="btn-style" >
                افزودن به سبد خرید
            </Button>
        </div>
    )
}

export default ProdactItem;