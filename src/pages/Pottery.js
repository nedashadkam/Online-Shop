import React from "react";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import ProdactItems from "../components/ProductItems/ProductItems";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import potteryImega1 from '../assets/images/pottery/pottery-1.jpg';
import potteryImega2 from '../assets/images/pottery/pottery-2.jpg';
import potteryImega3 from '../assets/images/pottery/pottery-3.jpg';
import potteryImega4 from '../assets/images/pottery/pottery-4.jpg';
import potteryImega5 from '../assets/images/pottery/pottery-5.jpg';
import potteryImega6 from '../assets/images/pottery/pottery-6.jpg';
import potteryImega7 from '../assets/images/pottery/pottery-7.jpg';
import potteryImega8 from '../assets/images/pottery/pottery-8.jpg';
import potteryImega9 from '../assets/images/pottery/pottery-9.jpg';
import potteryImega10 from '../assets/images/pottery/pottery-10.jpg';
import potteryImega11 from '../assets/images/pottery/pottery-11.jpg';
import potteryImega12 from '../assets/images/pottery/pottery-12.jpg';

const Pottery = () => {
    const potteryItems = [
        {
            itemAddress: potteryImega1,
            itemName: '1',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega2,
            itemName: '2',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega3,
            itemName: '3',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega4,
            itemName: '4',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega5,
            itemName: '5',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega6,
            itemName: '6',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega7,
            itemName: '7',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega8,
            itemName: '8',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega9,
            itemName: '9',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega10,
            itemName: '10',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega11,
            itemName: '11',
            itemPrice: '$'
        },
        {
            itemAddress: potteryImega12,
            itemName: '12',
            itemPrice: '$'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName='سفالی' />
                <ProdactItems arrayItems={potteryItems} title="دسته بندی ظروف سفالی" />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Pottery;