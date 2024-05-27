import React from "react";
import MenuItems from "../components/MenuItems/MenuItems";
import MenuItem from "../components/MenuItem/MenuItem";

const Ceramic = () => {
    return (
        <div style={{marginTop:'150px'}}>
            <div style={{textAlign:'end'}}>
                <MenuItems>
                <MenuItem link='/store' style={{color: '#979191',fontWeight: '100'}} >فروشگاه </MenuItem> |
                <MenuItem link='/store/ceramic' style={{color: '#979191',fontWeight: '100'}} >  سرامیک </MenuItem>
                </MenuItems>
            </div>
        </div>
    )
}

export default Ceramic;