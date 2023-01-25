import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, cover, pictures, description, hostName, hostPicture, rating, location, equipments, tags }) {
    let navigate = useNavigate();

    const handleLink = () => {
        navigate(`/Logement/${id}`)
    }

    return (
        <div className='card' onClick={handleLink}>
            <img src={cover} alt={title} />
            <h1>{title}</h1>
        </div>
    );
}

export default Card;