import React from 'react';
import Logo from "../images/LogoFooter.png"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <img src={Logo} alt="logo footer" />
                <p>&copy; 2020 Kasa, All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;