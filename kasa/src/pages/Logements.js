import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '@/components/logements.json';

const Logements = () => {

    const { id } = useParams();
    const logement = logements.find((element) => element.id === id);
    
    if(logement == undefined) {
        return(<Navigate to='/Error' replace/>);
    };

    return (
        <div className='logements'>
            {logement.title}
        </div>
    );
};

export default Logements;