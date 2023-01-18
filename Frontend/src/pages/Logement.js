import React from 'react';
import { useLocation } from 'react-router-dom';
import Data from "../data.json"

function Logement() {
    let location = useLocation()
    const paramId = location.pathname.slice(1)

    const logement = Data.find((logement) => logement.id === paramId)


    return (
        <div className='logement'>
        </div>
    );
}

export default Logement;