import React from 'react';
import { useLocation } from 'react-router-dom';
import Data from "../data.json"
import Carrousel from '../components/Carrousel';

function Logement() {
    let location = useLocation()
    const paramId = location.pathname.slice(10)

    const logement = Data.find((logement) => logement.id === paramId)

    return (
        <div className='logement'>
            <Carrousel slides={logement.pictures} />
        </div>
    );
}

export default Logement;