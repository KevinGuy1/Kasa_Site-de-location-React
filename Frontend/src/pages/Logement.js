import React from 'react';
import { NavLink } from 'react-router-dom';

function Logement() {
    return (
        <div className='logement'>
            <p>Je suis la page Logement</p>
            <div>
                <NavLink exact to="/">
                    Retour
                </NavLink>
            </div>
        </div>
    );
}

export default Logement;