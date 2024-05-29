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
            itemName: '1',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage2,
            itemName: '2',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage3,
            itemName: '3',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage4,
            itemName: '4',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage5,
            itemName: '5',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage6,
            itemName: '6',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage7,
            itemName: '7',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage8,
            itemName: '8',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage9,
            itemName: '9',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage10,
            itemName: '10',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage11,
            itemName: '11',
            itemPrice: '$'
        },
        {
            itemAddress: woodenImage12,
            itemName: '12',
            itemPrice: '$'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName='چوبی' />
                <ProdactItems arrayItems={woodenItems} title="دسته بندی ظروف چوبی" />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Wooden;