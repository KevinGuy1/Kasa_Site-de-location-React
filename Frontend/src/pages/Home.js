import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <p>Je suis la page Home</p>
            <div>
                <NavLink exact to="/fiche-logement">
                    Vers la page logement
                </NavLink>
            </div>
        </div>
    );
}

export default Home;