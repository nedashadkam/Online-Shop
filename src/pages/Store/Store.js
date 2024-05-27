import React from "react";
import MenuItems from "../../components/MenuItems/MenuItems";
import MenuItem from "../../components/MenuItem/MenuItem";
import './Store.css';

const Store = () => {
    const menuItemStyle = {
        border: '3px solid #445778',
    padding: '30px',
    borderRadius: '20px',
    margin: '10px',
    backgroundColor: 'rgb(248, 248, 248)',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 4px darkgray'

    }
    return (
        <main className="container">
            <div className="pages-path">
            <MenuItems>
                <MenuItem link='/store/pottery' style={menuItemStyle} >   سفال</MenuItem>
                <MenuItem link='/store/wodden' style={menuItemStyle}> چوبی</MenuItem>
                <MenuItem link='/store/glass' style={menuItemStyle} > شیشه ای</MenuItem>
                <MenuItem link='/store/tablecloth' style={menuItemStyle} >  رومیزی </MenuItem>
                <MenuItem link='/store/ceramic' style={menuItemStyle}>  سرامیک </MenuItem>
                <MenuItem link='/store/candle' style={menuItemStyle}>  شمع </MenuItem>
            </MenuItems>
            </div>

        </main>
    )
}

export default Store;