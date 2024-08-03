import React from "react";
import './Store.css';
import MenuItems from "../../components/MenuItems/MenuItems";
import MenuItem from "../../components/MenuItem/MenuItem";
import Suggested from "../../components/Suggested/Suggested";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";

const Store = () => {
    const menuItemStyle = {
        // border: '3px solid #445778',
        // padding: '30px',
        // borderRadius: '20px',
        // margin: '10px',
        // backgroundColor: 'rgb(248, 248, 248)',
        // boxSizing: 'border-box',
        // boxShadow: '0px 0px 4px darkgray'
        width: '72px', padding: '40px 10px', margin: '0',
        }
    
    return (
        <>
            <main className="store-container">
                <div className="pages-path">
                    <MenuItems>
                        <span><MenuItem style={menuItemStyle} link='/store/pottery'>   سفال</MenuItem></span>
                        <span><MenuItem style={menuItemStyle} link='/store/wodden'> چوبی</MenuItem></span>
                        <span><MenuItem style={menuItemStyle} link='/store/glass' > شیشه ای</MenuItem></span>
                        <span><MenuItem style={menuItemStyle} link='/store/tablecloth'  >  رومیزی </MenuItem></span>
                        <span><MenuItem style={menuItemStyle} link='/store/ceramic' >  سرامیک </MenuItem></span>
                        <span><MenuItem style={menuItemStyle} link='/store/candle'>  شمع </MenuItem></span>
                    </MenuItems>
                </div>
                <Suggested />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Store;

