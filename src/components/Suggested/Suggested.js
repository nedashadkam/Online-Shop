import React from "react";
import ProdactItems from "../ProductItems/ProductItems";
import suggestedItem1 from '../../assets/images/candle/candle-1.jpg';
import suggestedItem2 from '../../assets/images/candle/candle-2.jpg';
import suggestedItem3 from '../../assets/images/ceramic/ceramic-1.jpg';
import suggestedItem4 from '../../assets/images/ceramic/ceramic-2.jpg';
import suggestedItem5 from '../../assets/images/pottery/pottery-1.jpg';
import suggestedItem6 from '../../assets/images/wooden/wooden-1.jpg';
import suggestedItem7 from '../../assets/images/glass/glass-10.jpg';
import suggestedItem8 from '../../assets/images/tablecloth/tablecloth-3.jpg';
import newItem1 from '../../assets/images/candle/candle-13.jpg';
import newItem2 from '../../assets/images/wooden/wooden-2.webp';
import newItem3 from '../../assets/images/glass/glass-2.jpeg';
import newItem4 from '../../assets/images/candle/candle-4.jpg';
import newItem5 from '../../assets/images/tablecloth/tablecloth-5.jpg';
import newItem6 from '../../assets/images/ceramic/ceramic-6.jpg';
import newItem7 from '../../assets/images/pottery/pottery-8.jpg';
import newItem8 from '../../assets/images/pottery/pottery-4.jpg';

const Suggested = () => {
    const SuggestedItem = [
        {
            itemAddress: suggestedItem1,
            itemName: 'شمع دو عددی کد 111',
            itemPrice: '82 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: suggestedItem2,
            itemName: 'شمع طرح صدف کد 112',
            itemPrice: '56000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: suggestedItem3,
            itemName: 'سرویس طرح قارچ کد 113',
            itemPrice: '350 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: suggestedItem4,
            itemName: 'کاسه دو عددی کد 114',
            itemPrice: '106000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: suggestedItem5,
            itemName: 'سرویس سفالی کد 115',
            itemPrice: '210 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: suggestedItem6,
            itemName: 'ست چوبی کد 116',
            itemPrice: '300 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: suggestedItem7,
            itemName: 'گلدان شیشه ای کد 117',
            itemPrice: '330 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: suggestedItem8,
            itemName: 'رومیزی کد 118',
            itemPrice: '100 000 تومان',
            itemInformation: 'image information'
        }
    ]
    const newItem = [
        {
            itemAddress: newItem1,
            itemName: 'شمع قلمی کد 211',
            itemPrice: '11 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: newItem2,
            itemName: 'ظرف چوبی کد 212',
            itemPrice: '58000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: newItem3,
            itemName: '   گلدان شیشه ای کد 213 ',
            itemPrice: '50 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: newItem4,
            itemName: ' شمع پیچی کد 214   ',
            itemPrice: '6000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: newItem5,
            itemName: 'رومیزی کد 215',
            itemPrice: '200 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: newItem6,
            itemName: ' کاسه چهار عددی کد 216',
            itemPrice: '370 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: newItem7,
            itemName: 'دیوار کوب کد 217',
            itemPrice: '60 000 تومان',
            itemInformation: 'image information'
        },
        {
            itemAddress: newItem8,
            itemName: ' دیوار کوب کد 218',
            itemPrice: '70 000 تومان',
            itemInformation: 'image information'
        }
    ]
    return (
        <>
        <ProdactItems arrayItems={SuggestedItem} title='پیشنهادی ' />
        <ProdactItems arrayItems={newItem} title='جدیدترین ها ' />
        </>
    )
}

export default Suggested;