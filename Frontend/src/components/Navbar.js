import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/Logo.png"

function Navbar() {
    return (
        <div className='header'>
            <div className='header__container'>
                <NavLink exact to="/">
                    <img src={Logo} alt="Logo Kasa" />
                </NavLink>
                <nav>
                    <NavLink exact to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink exact to="/A-Propos">
                        <li>A Propos</li>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;