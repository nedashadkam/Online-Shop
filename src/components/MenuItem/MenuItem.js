import React from "react";
import { NavLink } from "react-router-dom";
import './MenuItem.css';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
    return (
        <NavLink style={props.style} className={({ isActive }) => isActive ? 'navlink-style red' : 'navlink-style blue'} to={props.link}>
            {props.children}
        </NavLink>
    )
}

export default MenuItem;

MenuItem.propTypes = {
    style: PropTypes.object,
    link: PropTypes.string.isRequired,
    // children : PropTypes.arrayOf(PropTypes.element)
}