import React from "react";
import { NavLink } from "react-router-dom";
import './MenuItem.css';

const MenuItem = (props) => {
    return (
        <NavLink className={({ isActive }) => isActive ? 'navlink-style red' : 'navlink-style blue'} to={props.link}>
            {props.children}
        </NavLink>
    )
}

export default MenuItem;