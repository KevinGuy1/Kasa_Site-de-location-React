import React, { useState } from 'react';
import Vector from '../images/vector.png'

function Drop({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);


    function handleClick() {
        setIsOpen(!isOpen)
    }



    return (
        <>
            <div className='drop' onClick={handleClick}>
                <h2>{title}</h2>
                <img className={`arrow ${isOpen && "isActive"}`} src={Vector} alt="Fleche ouvert ou fermé" />
            </div>
            <div>
                {isOpen ? <p>{content}</p> : null}
            </div>
        </>
    );
}

export default Drop;