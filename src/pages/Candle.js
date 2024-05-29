import React from "react";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import Footer from "../components/Footer/Footer";
import candleImage1 from '../assets/images/candle/candle-1.jpg';
import candleImage2 from '../assets/images/candle/candle-2.jpg';
import candleImage3 from '../assets/images/candle/candle-3.jpg';
import candleImage4 from '../assets/images/candle/candle-4.jpg';
import candleImage5 from '../assets/images/candle/candle-5.jpg';
import candleImage6 from '../assets/images/candle/candle-6.jpg';
import candleImage7 from '../assets/images/candle/candle-7.jpg';
import candleImage8 from '../assets/images/candle/candle-8.jpg';
import candleImage9 from '../assets/images/candle/candle-9.jpg';
import candleImage10 from '../assets/images/candle/candle-10.jpg';
import candleImage11 from '../assets/images/candle/candle-11.jpg';
import candleImage12 from '../assets/images/candle/candle-12.jpg';
import ProdactItems from "../components/ProductItems/ProductItems";

const Candle = () => {
    const candleItems = [
        {
            itemAddress: candleImage1,
            itemName: '1',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage2,
            itemName: '2',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage3,
            itemName: '3',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage4,
            itemName: '4',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage5,
            itemName: '5',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage6,
            itemName: '6',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage7,
            itemName: '7',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage8,
            itemName: '8',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage9,
            itemName: '9',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage10,
            itemName: '10',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage11,
            itemName: '11',
            itemPrice: '$'
        },
        {
            itemAddress: candleImage12,
            itemName: '12',
            itemPrice: '$'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName=' شمع' />
                <ProdactItems arrayItems={candleItems} title='دسته بندی شمع ها' />
                <Footer />
            </main>
            <Footer />
        </>
    )
}

export default Candle;