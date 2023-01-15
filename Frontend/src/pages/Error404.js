import React from 'react';

function Error404() {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <div className='linkReturn'>
                <a href='/'>Retourner sur la page d'accueil</a>
            </div>
        </div>
    );
}

export default Error404;