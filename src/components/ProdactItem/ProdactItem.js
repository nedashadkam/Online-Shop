import React, { useState } from "react";
import Button from '../button/Button';
import './ProdactItem.css';
import Modal from '../Modal/Modal';
import ImageModalContent from '../ImageModalContent/ImageModalContent';

const ProdactItem = (props) => {

    const [showImgModal, setShowImgModal] = useState(false);
    function showModal() {
        setShowImgModal(true)
    }
    function modalClosed() {
        setShowImgModal(false)
    }
    return (
        <div className="prodactItem">
            <div className="image-container">
                <img src={props.imageAddress} onClick={showModal} />
            </div>
            <span>{props.itemName}</span>
            <span>{props.itemPrice}</span>
            <Button btnStyle="btn-style" >
                افزودن به سبد خرید
            </Button>
            {
                showImgModal ? <Modal modalStyle='product-item-modal' Closed={modalClosed}>
                    <ImageModalContent modalImgAddress={props.imageAddress} itemInformation={props.itemInformation}/>
                </Modal> : null
            }
        </div>
    )
}

export default ProdactItem;