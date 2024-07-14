import React from "react";
import ProdactItems from "../components/ProductItems/ProductItems";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
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
            itemName: 'ظرف استوانه ای کد 501',
            itemPrice: 60000,
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: glassImega2,
            itemName: 'گلدان شیشه ای کد 213',
            itemPrice: 50000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: glassImega3,
            itemName: 'گلدان شیشه ای کد 502',
            itemPrice: 80000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: glassImega4,
            itemName: 'گلدان شیشه ای کد 503',
            itemPrice: 60000,
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: glassImega5,
            itemName: 'تنگ شیشه ای کد 504',
            itemPrice: 200000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: glassImega6,
            itemName: 'ست گلدان رنگی کد 505',
            itemPrice: 300000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: glassImega7,
            itemName: 'تنگ شیشه ای کد 506',
            itemPrice: 90000,
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: glassImega8,
            itemName: 'تنگ شیشه ای کد 507',
            itemPrice: 150000,
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: glassImega9,
            itemName: 'ست گلدان کد 508',
            itemPrice: 305000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: glassImega10,
            itemName: 'گلدان شیشه 117',
            itemPrice: 330000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: glassImega11,
            itemName: 'تنگ  و لیوان شیشه ای کد 509',
            itemPrice: 200000,
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: glassImega12,
            itemName: 'گلدان شیشه ای کد 510',
            itemPrice: 90000,
            itemInformation:'اطلاعات محصول'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName='شیشه ای' />
                <ProdactItems showSearchBar={true} arrayItems={glassItems} title="دسته بندی ظروف شیشه ای" />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Glass;