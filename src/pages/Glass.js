import React from "react";
import ProdactItems from "../components/ProductItems/ProductItems";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import glassImega1 from '../assets/images/glass/glass-1.jpg';
import glassImega2 from '../assets/images/glass/glass-2.jpeg';
import glassImega3 from '../assets/images/glass/glass-3.jpeg';
import glassImega4 from '../assets/images/glass/glass-4.jpg';
import glassImega5 from '../assets/images/glass/glass-5.jpg';
import glassImega6 from '../assets/images/glass/glass-6.jpg';
import glassImega7 from '../assets/images/glass/glass-7.jpg';
import glassImega8 from '../assets/images/glass/glass-8.jpg';
import glassImega9 from '../assets/images/glass/glass-9.jpg';
import glassImega10 from '../assets/images/glass/glass-10.jpg';
import glassImega11 from '../assets/images/glass/glass-11.jpg';
import glassImega12 from '../assets/images/glass/glass-12.jpg';

const Glass = () => {
    const glassItems = [
        {
            itemAddress: glassImega1,
            itemName: '1',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega2,
            itemName: '2',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega3,
            itemName: '3',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega4,
            itemName: '4',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega5,
            itemName: '5',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega6,
            itemName: '6',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega7,
            itemName: '7',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega8,
            itemName: '8',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega9,
            itemName: '9',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega10,
            itemName: '10',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega11,
            itemName: '11',
            itemPrice: '$'
        },
        {
            itemAddress: glassImega12,
            itemName: '12',
            itemPrice: '$'
        }
    ]
    return (
        <main>
            <RouteMarker pageName='شیشه ای' />
            <ProdactItems arrayItems={glassItems} title="دسته بندی ظروف شیشه ای" />
        </main>
    )
}

export default Glass;