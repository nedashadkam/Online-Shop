import React, { useState, useContext } from "react";
import Button from '../button/Button';
import './ProdactItem.css';
import Modal from '../Modal/Modal';
import ImageModalContent from '../ImageModalContent/ImageModalContent';
import { ShoppingBoxContext } from "../../containers/Context/ShoppingBoxContext";
import PropTypes from 'prop-types';

const ProdactItem = (props) => {

    const [showImgModal, setShowImgModal] = useState(false);
    const shoppingBoxContext = useContext(ShoppingBoxContext);
    const { shoppingBoxValue, setShoppingBoxValue, itemNumber, setItemNumber } = shoppingBoxContext;

    function showModal() {
        setShowImgModal(true)
    }
    function modalClosed() {
        setShowImgModal(false)
    }

    // console.log(shoppingBoxValue)
    function addToShoppingBox() {
        shoppingBoxValue.push({
            imageAddress: props.imageAddress,
            itemName: props.itemName,
            itemPrice: props.itemPrice
        })
        // console.log(shoppingBoxValue)
        setItemNumber(shoppingBoxValue.length)
    }

    return (
        <div className="prodact-item">
            <div className="image-container">
                <img src={props.imageAddress} onClick={showModal} />
            </div>
            <span>{props.itemName}</span>
            <span> تومان{props.itemPrice} </span>
            <Button btnStyle="btn-style" clicked={addToShoppingBox} >
                افزودن به سبد خرید
            </Button>
            {
                showImgModal ? <Modal modalStyle='product-item-modal' Closed={modalClosed}>
                    <ImageModalContent modalImgAddress={props.imageAddress} itemInformation={props.itemInformation} />
                </Modal> : null
            }
        </div>
    )
}

export default ProdactItem;

ProdactItem.propTypes = {
    imageAddress: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemPrice: PropTypes.number.isRequired,
    itemInformation: PropTypes.string.isRequired,
}