import React from "react";
import ProdactItems from "../components/ProductItems/ProductItems";
import ProdactItem from "../components/ProdactItem/ProdactItem";
import ceramicImage1 from '../assets/images/ceramic/ceramic-1.jpg';
import ceramicImage2 from '../assets/images/ceramic/ceramic-2.jpg';
import ceramicImage3 from '../assets/images/ceramic/ceramic-3.jpg';
import ceramicImage4 from '../assets/images/ceramic/ceramic-4.jpg';
import ceramicImage5 from '../assets/images/ceramic/ceramic-5.jpg';
import ceramicImage6 from '../assets/images/ceramic/ceramic-6.jpg';
import ceramicImage7 from '../assets/images/ceramic/ceramic-7.jpg';
import ceramicImage8 from '../assets/images/ceramic/ceramic-8.jpg';
import ceramicImage9 from '../assets/images/ceramic/ceramic-9.jpg';
import ceramicImage10 from '../assets/images/ceramic/ceramic-10.jpg';
import ceramicImage11 from '../assets/images/ceramic/ceramic-11.jpg';
import ceramicImage12 from '../assets/images/ceramic/ceramic-12.jpg';

const Ceramic = () => {
    const ceramicItems = [
        {
            itemAddress: ceramicImage1,
            itemName: '1', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage2,
            itemName: '2', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage3,
            itemName: '3', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage4,
            itemName: '4', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage5,
            itemName: '5', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage6,
            itemName: '6', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage7,
            itemName: '7', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage8,
            itemName: '8', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage9,
            itemName: '9', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage10,
            itemName: '10', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage11,
            itemName: '11', 
            itemPrice: '$'
        },
        {
            itemAddress: ceramicImage12,
            itemName: '12', 
            itemPrice: '$'
        }
    ]
    return (
        <ProdactItems arrayItems={ceramicItems} title="دسته بندی ظروف سرامیکی"  pageName='سرامیکی'/>
    )
}

export default Ceramic;