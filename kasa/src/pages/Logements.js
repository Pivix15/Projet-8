import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '@/components/logements.json';
import Etoiles from '@/components/Etoiles';
import Carousel from '@/components/Carousel';

const Logements = () => {

    const { id } = useParams();
    const logement = logements.find((element) => element.id === id);

    if (logement === undefined) {
        return (<Navigate to='/Error' replace />);
    };

    //
    // FAQ
    //
    const FaqItem = ({ question, reponse }) => {
        const [isActive, setIsActive] = useState(false);

        const toggleActive = () => {
            setIsActive(!isActive);
        };

        return (
            <div className={`l--faq ${isActive ? 'active' : ''}`}>
                <div className='l-question'>
                    <h3>{question}</h3>
                    <svg onClick={toggleActive} xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#FFFF" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
                </div>
                <div className='l-reponse'>
                    <p>{reponse}</p>
                </div>
            </div>
        );
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
                    <FaqItem question="Description" reponse={logement.description} />
                    <FaqItem question="Équipements"
                        reponse={logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))} />
                </div>
            </section>
        </div>
    );
};

export default Logements;