import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { Outlet } from "react-router-dom";

const MenuItems = () => {
    return (
       <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'flex-end'}}>
         <ul style={{marginBlockStart: '0', marginBlockEnd: '0',margin: '7px 20px'}}>
            <MenuItem link='/' > صفحه اصلی</MenuItem>
            <MenuItem link='/pottery' > سرامیک و سفال</MenuItem>
            <MenuItem link='/wodden' > چوبی</MenuItem>
            <MenuItem link='/glass' > شیشه ای</MenuItem>
            <MenuItem link='/carpet' > فرشینه و بافتنی</MenuItem>
        </ul>
        <Outlet />
       </div>
    )
}

export default MenuItems;