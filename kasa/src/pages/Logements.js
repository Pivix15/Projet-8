import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '@/components/logements.json';
import Etoiles from '@/components/Etoiles';
import Carousel from '@/components/Carousel';
import DropDownInformations from '@/components/DropDownInformation';

const Logements = () => {

    const { id } = useParams();
    const logement = logements.find((element) => element.id === id);

    if (logement === undefined) {
        return (<Navigate to='/Error' replace />);
    };

    //global return
    return (
        <div>
            <Carousel pictures={logement.pictures}/>
            <section className='info-logement'>
                <div className='info-logement_head'>
                    <div className='info-logement_head__title'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className='info-logement_head__profile'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="profile" />
                    </div>
                </div>
                <div className='info-logement_cachalot'>
                    <div className='info-logement_cachalot__category'>
                        <ul>
                            {logement.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='info-logement_cachalot__notes'>
                        <Etoiles rating={logement.rating} />
                    </div>
                </div>

                <div className='l-faq'>
                    <DropDownInformations question="Description" reponse={logement.description} />
                    <DropDownInformations question="Équipements"
                        reponse={logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))} />
                </div>
            </section>
        </div>
    );
};

export default Logements;