import React from "react";

const MenuItems = (props) => {
    
    return (
        <ul style={props.styles}>
            {props.children}
        </ul>
    )
}
export default MenuItems;