import React from "react";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import ProdactItems from "../components/ProductItems/ProductItems";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
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
 

const Candle = () => {
    const candleItems = [
        {
            itemAddress: candleImage1,
            itemName: 'شمع دو عددی کد 111',
            itemPrice: 82000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage2,
            itemName: 'شمع طرح صدف کد 112',
            itemPrice: 56000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage3,
            itemName: 'شمع استوانه ای کد 301',
            itemPrice: 54000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage4,
            itemName: 'شمع پیچی کد 214',
            itemPrice: 60000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage5,
            itemName: 'شمع استوانه ای باریک کد 302',
            itemPrice: 24000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage6,
            itemName: 'شمع طرح سگ کد 303',
            itemPrice: 112000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage7,
            itemName: 'شمع دو عددی کد 304',
            itemPrice: 85000,
            itemInformation: 'image information'
        },
        {
            itemAddress: candleImage8,
            itemName: 'ست شمع کد 305',
            itemPrice: 482000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage9,
            itemName: 'ست شمع کد 306',
            itemPrice: 510000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage10,
            itemName: 'ست شمع ابری کد 307',
            itemPrice: 68000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage11,
            itemName: 'شمع پیچی کد 308',
            itemPrice: 95000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: candleImage12,
            itemName: 'شمع استوانه ای  کد 309',
            itemPrice: 84000,
            itemInformation: 'اطلاعات محصول'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName=' شمع' />
                <ProdactItems showSearchBar={true} arrayItems={candleItems} title='دسته بندی شمع ها' />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Candle;