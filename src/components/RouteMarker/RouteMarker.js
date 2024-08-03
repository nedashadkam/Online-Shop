import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import MenuItems from "../MenuItems/MenuItems";
import './RouteMarker.css';
import PropTypes from 'prop-types';

const RouteMarker = (props) => {
    return (
        <div className="route-marker">
            <MenuItems>
                <MenuItem link='/store' style={{border: 'none', color: 'rgb(155 155 155)', fontWeight: '100', marginLeft: '0', paddingLeft: '5px' }} >فروشگاه </MenuItem>
                <span style={{ color: 'rgb(155 155 155)' }}>/ {props.pageName}</span>
            </MenuItems>
        </div>
    )
}

export default RouteMarker;

RouteMarker.propTypes = {
    pageName: PropTypes.string.isRequired
}