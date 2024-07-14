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
            itemPrice: 110000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage2,
            itemName: 'رومیزی کد 611',
            itemPrice: 120000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage3,
            itemName: 'رومیزی کد 118',
            itemPrice: 100000,
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage4,
            itemName: 'رومیزی کد 612',
            itemPrice: 80000,
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage5,
            itemName: 'رومیزی کد 215',
            itemPrice: 200000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage6,
            itemName: 'رومیزی کد 613',
            itemPrice: 220000,
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage7,
            itemName: 'رومیزی کد 614',
            itemPrice: 150000,
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage8,
            itemName: 'رومیزی کد 615',
            itemPrice: 160000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage9,
            itemName: 'رومیزی کد 616',
            itemPrice: 140000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage10,
            itemName: 'رومیزی کد 617',
            itemPrice: 160000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage11,
            itemName: 'رومیزی کد 618',
            itemPrice: 150000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: tableclothImage12,
            itemName: 'رومیزی کد 619',
            itemPrice: 200000,
            itemInformation: 'اطلاعات محصول'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName='رومیزی' />
                <ProdactItems showSearchBar={true} arrayItems={tableclothItems} title="دسته بندی رومیزی" />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default TableCloth;