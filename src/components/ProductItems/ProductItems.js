import React from "react";
import './ProdactItems.css';
import MenuItem from "../MenuItem/MenuItem";
import MenuItems from "../MenuItems/MenuItems";
import ProdactItem from "../ProdactItem/ProdactItem";

const ProdactItems = (props) => {

    return (
        <div className="candle-page-container">
            <div className="route-marker">
                <MenuItems>
                    <MenuItem link='/store' style={{ color: 'rgb(155 155 155)', fontWeight: '100',marginLeft: '0',paddingLeft: '5px' }} >فروشگاه </MenuItem>
                    <span style={{color: 'rgb(155 155 155)'}}>/ {props.pageName}</span>
                </MenuItems>
            </div>
            <div>
                <span style={{ borderBottom: '1px solid gray', display: 'inline-block', width: '25em', verticalAlign: 'middle' }} />
                <span style={{ padding: '0 25px', padding: '0px 25px', fontSize: '24px', color: '#504d4d' }}>{props.title}</span>
                <span style={{ borderBottom: '1px solid gray', display: 'inline-block', width: '30em', verticalAlign: 'middle' }} />
            </div>
            <div className="candle-items-box">
                {
                    props.arrayItems.map((item) => {
                        return <ProdactItem  imageAddress={item.itemAddress} itemName={item.itemName} itemPrice={item.itemPrice} />
                    })
                }
            </div>
        </div>)
}

export default ProdactItems;


