import React from "react";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import ProdactItems from "../components/ProductItems/ProductItems";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import woodenImage1 from '../assets/images/wooden/wooden-1.jpg';
import woodenImage2 from '../assets/images/wooden/wooden-2.webp';
import woodenImage3 from '../assets/images/wooden/wooden-3.jpg';
import woodenImage4 from '../assets/images/wooden/wooden-4.jpg';
import woodenImage5 from '../assets/images/wooden/wooden-5.jpg';
import woodenImage6 from '../assets/images/wooden/wooden-6.jpg';
import woodenImage7 from '../assets/images/wooden/wooden-7.jpg';
import woodenImage8 from '../assets/images/wooden/wooden-8.jpg';
import woodenImage9 from '../assets/images/wooden/wooden-9.jpg';
import woodenImage10 from '../assets/images/wooden/wooden-10.jpg';
import woodenImage11 from '../assets/images/wooden/wooden-11.jpg';
import woodenImage12 from '../assets/images/wooden/wooden-12.jpg';


const Wooden = () => {
    const woodenItems = [
        {
            itemAddress: woodenImage1,
            itemName: 'ست چوبی کد 116',
            itemPrice: '300 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage2,
            itemName: 'ظرف چوبی کد 212',
            itemPrice: '58 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage3,
            itemName: 'سینی گرد چوبی کد 710',
            itemPrice: '98 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage4,
            itemName: 'کاسه چوبی کد 711',
            itemPrice: '100 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage5,
            itemName: 'ست چوبی کد 712',
            itemPrice: '600 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage6,
            itemName: 'ماگ چوبی کد 713',
            itemPrice: '80 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage7,
            itemName: 'زیر لیوانی چوبی کد 714 ',
            itemPrice: '160 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage8,
            itemName: 'گلدان چوبی کد 715',
            itemPrice: '200 000 تومان ',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage9,
            itemName: 'سینی چوبی کد 716',
            itemPrice: '98 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage10,
            itemName: 'قندان چوبی کد 717',
            itemPrice: '106 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage11,
            itemName: 'گلدان چوبی دو عددی کد 718',
            itemPrice: '160 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: woodenImage12,
            itemName: 'قندان چوبی کد 719',
            itemPrice: '180 000 تومان',
            itemInformation: 'image information'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName='چوبی' />
                <ProdactItems showSearchBar={true} arrayItems={woodenItems} title="دسته بندی ظروف چوبی" />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Wooden;