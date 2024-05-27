import React from "react";
import Button from '../button/Button';
import './ProdactItem.css';

const ProdactItem = (props) => {
    return (
        <div className="prodactItem">
            <img src={props.imageAddress} />
            <span>{props.itemName}</span>
            <span>{props.itemPrice}</span>
            <Button btnStyle="btn-style" >
                 افزودن به سبد خرید
            </Button>
        </div>
    )
}

export default ProdactItem;