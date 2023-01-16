import React from 'react';

function Card({ key, id, title, cover, pictures, description, hostName, hostPicture, rating, location, equipments, tags }) {
    return (
        <div className='card'>
            <img src={cover} alt={title} style={{ width: "100px", height: "100px" }} />
            <h1 style={{ color: "black", fontSize: "18px" }}>{title}</h1>
        </div>
    );
}

export default Card;