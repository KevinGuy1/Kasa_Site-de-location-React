import React from 'react';

function Drop({ title, content }) {




    return (
        <div className='drop'>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    );
}

export default Drop;