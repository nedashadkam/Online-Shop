import React, { useState } from "react";
import Button from '../button/Button';
import './ProdactItem.css';
import Modal from '../Modal/Modal';
import ImageModalContent from '../ImageModalContent/ImageModalContent';

const ProdactItem = (props) => {
    const modalStyle = {
        backgroundColor: 'rgb(248, 248, 248)',
        position: 'fixed',
        zIndex: '1000',
        boxSizing: 'border-box',
        width: '50%',
        height: 'auto',
        padding: '20px',
        left: '25%',
        top: '20%',
        border: '1px solid rgb(167, 167, 167)',
        boxShadow: 'rgb(59 59 59) 0px 0px 35px 3px',
        borderRadius: '10px',
    }
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
                showImgModal ? <Modal modalStyle={modalStyle} Closed={modalClosed}>
                    <ImageModalContent modalImgAddress={props.imageAddress} itemInformation={props.itemInformation}/>
                </Modal> : null
            }
        </div>
    )
}

export default ProdactItem;