import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '@/components/logements.json';

const Logements = () => {

    const { id } = useParams();
    const logement = logements.find((element) => element.id === id);

    if (logement === undefined) {
        return (<Navigate to='/Error' replace />);
    };


    //
    // Les étoiles
    //
    const Notes = ({ rating }) => {
        const numberOfStars = parseInt(rating, 10);

        const etoiles = Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < numberOfStars ? 'c-etoile' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
            </span>
        ));

        return <div className="notes">{etoiles}</div>;
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
                        <Notes rating={logement.rating} />
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