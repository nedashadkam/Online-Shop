import React from "react";
import PropTypes from 'prop-types';

const MenuItems = (props) => {

    return (
        <ul style={props.styles}>
            {props.children}
        </ul>
    )
}
export default MenuItems;

MenuItems.propTypes = {
    styles: PropTypes.object,
    // children : PropTypes.arrayOf(PropTypes.element)
}