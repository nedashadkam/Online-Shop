import React from "react";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import ProdactItems from "../components/ProductItems/ProductItems";
import tableclothImage1 from '../assets/images/tablecloth/tablecloth-1.jpg';
import tableclothImage2 from '../assets/images/tablecloth/tablecloth-2.jpg';
import tableclothImage3 from '../assets/images/tablecloth/tablecloth-3.jpg';
import tableclothImage4 from '../assets/images/tablecloth/tablecloth-4.jpg';
import tableclothImage5 from '../assets/images/tablecloth/tablecloth-5.jpg';
import tableclothImage6 from '../assets/images/tablecloth/tablecloth-6.jpg';
import tableclothImage7 from '../assets/images/tablecloth/tablecloth-7.jpg';
import tableclothImage8 from '../assets/images/tablecloth/tablecloth-8.jpg';
import tableclothImage9 from '../assets/images/tablecloth/tablecloth-9.jpg';
import tableclothImage10 from '../assets/images/tablecloth/tablecloth-10.jpg';
import tableclothImage11 from '../assets/images/tablecloth/tablecloth-11.jpg';
import tableclothImage12 from '../assets/images/tablecloth/tablecloth-12.jpg';

const TableCloth = () => {
    const tableclothItems = [
        {
            itemAddress: tableclothImage1,
            itemName: '1',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage2,
            itemName: '2',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage3,
            itemName: '3',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage4,
            itemName: '4',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage5,
            itemName: '5',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage6,
            itemName: '6',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage7,
            itemName: '7',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage8,
            itemName: '8',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage9,
            itemName: '9',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage10,
            itemName: '10',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage11,
            itemName: '11',
            itemPrice: '$'
        },
        {
            itemAddress: tableclothImage12,
            itemName: '12',
            itemPrice: '$'
        }
    ]
    return (
        <main>
            <RouteMarker pageName='رومیزی' />
            <ProdactItems arrayItems={tableclothItems} title="دسته بندی رومیزی"  />
        </main>
    )
}

export default TableCloth;