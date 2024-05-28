import React from "react";
 
const MenuItems = (props) => {
    const styles = {
        width: '100%',
    marginBlock: '0px',
    margin: '7px 20px',
    paddingInlineStart: '0px',
    }
    return (
            <ul style={styles}>
                {props.children}
            </ul>
    )
}
export default MenuItems;