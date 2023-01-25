import React from 'react';
import { useLocation } from 'react-router-dom';
import Data from "../data.json"
import Carrousel from '../components/Carrousel';
import Drop from "../components/Drop"

function Logement() {
    let location = useLocation()
    const paramId = location.pathname.slice(10)

    const logement = Data.find((logement) => logement.id === paramId)

    return (
        <div className='logement'>
            <Carrousel slides={logement.pictures} />
            <div>
                <div className='logement__titles'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    {logement.tags.map((tags) => {
                        return (
                            <div>
                                {tags}
                            </div>
                        );
                    })}
                </div>
                <div className='logement__user'>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="host" />
                    </div>
                    <div className='stars'>

                    </div>
                </div>
            </div>
            <Drop
                title="Description"
                content={logement.description} />
            <Drop
                title="Equipments"
                content={logement.equipments} />
        </div>
    );
}

export default Logement;