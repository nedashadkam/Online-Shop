import React from "react";
import RouteMarker from "../components/RouteMarker/RouteMarker";
import ProdactItems from "../components/ProductItems/ProductItems";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
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
            itemName: 'سرویس طرح قارچ کد 113',
            itemPrice: ' 350 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage2,
            itemName: 'کاسه دو عددی کد 114',
            itemPrice: '106 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage3,
            itemName: 'کاسه دو عددی طرح پرنده کد 401',
            itemPrice: '180 000 تومان',
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage4,
            itemName: 'ظروف طرح گوزن کد 402',
            itemPrice: '250 000 تومان',
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage5,
            itemName: 'ست لیوان رنگی کد 403',
            itemPrice: '360 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage6,
            itemName: 'کاسه چهار عددی کد 216',
            itemPrice: '370 000 تومان',
            itemInformation:'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage7,
            itemName: 'فنجان های سرامیکی کد 404',
            itemPrice: '200 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage8,
            itemName: 'کاسه طرح روباه کد 405',
            itemPrice: '70 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage9,
            itemName: 'ست خرسی کد 406',
            itemPrice: '312 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage10,
            itemName: 'کاسه طرح کاج کد 407',
            itemPrice: '80 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage11,
            itemName: 'ظرف خرسی کد 408',
            itemPrice: '90 000 تومان',
            itemInformation: 'اطلاعات محصول'
        },
        {
            itemAddress: ceramicImage12,
            itemName: 'ست آهو کد 409',
            itemPrice: '250 000 تومان',
            itemInformation: 'اطلاعات محصول'
        }
    ]
    return (
        <>
            <main>
                <RouteMarker pageName='سرامیک' />
                <ProdactItems showSearchBar={true} arrayItems={ceramicItems} title="دسته بندی ظروف سرامیکی" />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Ceramic;