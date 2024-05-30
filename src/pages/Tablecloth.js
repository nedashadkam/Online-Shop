import React from "react";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import ProdactItems from "../components/ProductItems/ProductItems";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
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
            itemName: 'رومیزی کد 610',
            itemPrice: '110 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage2,
            itemName: 'رومیزی کد 611',
            itemPrice: '120 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage3,
            itemName: 'رومیزی کد 118',
            itemPrice: '100 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage4,
            itemName: 'رومیزی کد 612',
            itemPrice: '80 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage5,
            itemName: 'رومیزی کد 215',
            itemPrice: '200 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage6,
            itemName: 'رومیزی کد 613',
            itemPrice: '210 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage7,
            itemName: 'رومیزی کد 614',
            itemPrice: '150 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage8,
            itemName: 'رومیزی کد 615',
            itemPrice: '$',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage9,
            itemName: 'رومیزی کد 616',
            itemPrice: '140 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage10,
            itemName: 'رومیزی کد 617',
            itemPrice: '160 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage11,
            itemName: 'رومیزی کد 618',
            itemPrice: '150 000 نومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: tableclothImage12,
            itemName: 'رومیزی کد 619',
            itemPrice: '200 000 تومان',
            itemInformation: 'image information'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName='رومیزی' />
                <ProdactItems arrayItems={tableclothItems} title="دسته بندی رومیزی" />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default TableCloth;