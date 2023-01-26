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
            <div className='logement__head'>
                <div className='logement__head__titles'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className='tags'>
                        {logement.tags.map((tags) => {
                            return (
                                <div className='tag'>
                                    {tags}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='logement__head__user'>
                    <div className='host'>
                        <div className='name'>{logement.host.name}</div>
                        <img src={logement.host.picture} alt="host" />
                    </div>
                    <div className='stars'>
                        étoiles
                    </div>
                </div>
            </div>
            <div className='drops'>
                <div className='droplog'><Drop title="Description" content={logement.description} /></div>
                <div className='droplog'><Drop title="Equipments" content={logement.equipments.map((equipments) => {
                    return (
                        <div className='equipment'>
                            {equipments}
                        </div>
                    );
                })} /></div>
            </div>
        </div>
    );
}

export default Logement;