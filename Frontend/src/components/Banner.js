import React from 'react';

function Banner({ bg }) {
    return (
        <div className='banner'>
            <img src={bg} alt="banner"></img>
        </div>
    );
}

export default Banner;