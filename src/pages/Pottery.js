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
            itemName: 'سرویس سفالی کد 115',
            itemPrice: '210 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega2,
            itemName: 'ست سفالی کد 650',
            itemPrice: '200 000 تومان',
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega3,
            itemName: 'ست سفالی کد 661',
            itemPrice: '210 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega4,
            itemName: 'دیوار کوب کد 218',
            itemPrice: '70 000 تومان',
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega5,
            itemName: 'دیوار کوب دوتایی کد 662',
            itemPrice: '140 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega6,
            itemName: 'قندان سفالی کد 663',
            itemPrice: '80 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega7,
            itemName: 'ست سفالی کد 664',
            itemPrice: '190 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega8,
            itemName: 'دیوارکوب کد 217',
            itemPrice: '60 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega9,
            itemName: 'ظرف دیزی کد 665',
            itemPrice: '80 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega10,
            itemName: 'قندان سفالی کد 667',
            itemPrice: '90 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega11,
            itemName: 'قندان سفالی کد 668',
            itemPrice: '100 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: potteryImega12,
            itemName: 'ست سفالی کد 680',
            itemPrice: '260 000 تومان',
            itemInformation: 'اطلاعات محصول'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName='سفالی' />
                <ProdactItems showSearchBar={true} arrayItems={potteryItems} title="دسته بندی ظروف سفالی" />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Pottery;