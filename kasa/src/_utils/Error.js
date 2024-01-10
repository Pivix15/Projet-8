import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className='error'>
            <p>404</p>
            <div>
                <p>Oups! La page qui vous demandez n'existe pas.</p>
            </div>
            <div>
                <Link to="/home">Retourner sur la page d'accueil</Link>
            </div>
        </section>
    );
};

export default Error;