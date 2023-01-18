import React, { useState } from 'react';
import Vector from '../images/vector.png'

function Drop({ title, content }) {
    const [isOpen, setIsOpen] = useState(true);


    function handleClick() {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <div className='drop' onClick={handleClick}>
                <h2>{title}</h2>
                <img className={`arrow ${isOpen && "isActive"}`} src={Vector} alt="Fleche ouvert ou fermé" />
            </div>
            {isOpen ? <div className='drop_content'><p>{content}</p></div> : null}

        </>
    );
}

export default Drop;