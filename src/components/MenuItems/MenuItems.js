import React from "react";
 
const MenuItems = (props) => {
    
    return (
            <ul  style={{marginBlockStart:'0', marginBlockEnd:'0', margin: '7px 20px'}}>
                {props.children}
            </ul>
    )
}
export default MenuItems;