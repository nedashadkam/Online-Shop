import React from "react";
import logo from '../../assets/images/—Pngtree—online shopping logo desing_8918925.png';

const Logo = () => {

    const styles ={
        width: '80px',
        height: 'auto',
        marginTop: '10px'
    }
    return (
        <div>
            <img style={styles} src={logo} alt="online shop logo" />
        </div>
    )
}

export default Logo;