import React, { useContext } from "react";
import './ShoppingBoxContent.css';
import { ShoppingBoxContext } from "../../containers/Context/ShoppingBoxContext";
import Button from "../button/Button";
import { payment } from "../../services/PaymentService";

const ShoppingBoxContent = () => {
    const shoppingBoxContext = useContext(ShoppingBoxContext);
    const { shoppingBoxValue, setShoppingBoxValue, itemNumber, setItemNumber } = shoppingBoxContext;
    let totalPrice = 0;
    let itemIndex;

    function deleteItem(index) {
        const item = shoppingBoxValue;
        item.splice(index, 1);
        setShoppingBoxValue(item);
        setItemNumber(item.length)
    }
    function checkOut() {
        payment(totalPrice)
            .then(res => { return res })
    }
    return (
        <div className="shopping-box-container">
            <div>
                {
                    shoppingBoxValue.map((item, index) => {
                        totalPrice = totalPrice + item.itemPrice;

                        return <div key={index} className="shopping-box-item-container">
                            <i className="material-icons" onClick={() => deleteItem(index)} >close</i>
                            <div className="shopping-box-item">
                                <img src={item.imageAddress} />
                                <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                                    <span>{item.itemName}</span>
                                    <span> {item.itemPrice} تومان</span>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <p>جمع قیمت ها : {totalPrice} تومان</p>
            <Button clicked={checkOut} btnStyle="shopping-box-btn">پرداخت </Button>
        </div>
    )
}

export default ShoppingBoxContent;