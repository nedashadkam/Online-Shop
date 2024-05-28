import React from "react";
import ProdactItems from "../ProductItems/ProductItems";
import imega1 from '../../assets/images/candle/candle-1.jpg';
import imega2 from '../../assets/images/candle/candle-2.jpg';
import imega3 from '../../assets/images/ceramic/ceramic-1.jpg';
import imega4 from '../../assets/images/ceramic/ceramic-2.jpg';
import imega5 from '../../assets/images/pottery/pottery-1.jpg';
import imega6 from '../../assets/images/wooden/wooden-1.jpg';

const Suggested = () => {
    const SuggestedItem = [
        {
            itemAddress: imega1,
            itemName: '1',
            itemPrice: '$'
        },
        {
            itemAddress: imega2,
            itemName: '2',
            itemPrice: '$'
        },
        {
            itemAddress: imega3,
            itemName: '3',
            itemPrice: '$'
        },
        {
            itemAddress: imega4,
            itemName: '4',
            itemPrice: '$'
        },
        {
            itemAddress: imega5,
            itemName: '5',
            itemPrice: '$'
        },
        {
            itemAddress: imega6,
            itemName: '6',
            itemPrice: '$'
        }
    ]
    return (
        <ProdactItems arrayItems={SuggestedItem} title='پیشنهادی ' />
    )
}

export default Suggested;