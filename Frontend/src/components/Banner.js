import React from 'react';
import bg from "../images/bg_banner.png"

function Banner() {
    return (
        <div className='banner'>
            <img src={bg} alt="banner"></img>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    );
}

export default Banner;