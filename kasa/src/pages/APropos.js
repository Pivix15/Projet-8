import React, { useState } from 'react';
import img2 from '@/img/source2.svg';

const FaqItem = ({ question, reponse }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`faq ${isActive ? 'active' : ''}`}>
            <div className='question'>
                <h3>{question}</h3>
                <svg onClick={toggleActive} xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#FFFF" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            </div>
            <div className='reponse'>
                <p>{reponse}</p>
            </div>
        </div>
    );
};

const APropos = () => {
    return (
        <div>
            <section className='pbanner'>
                <div className='banner'>
                    <img src={img2} alt='Des montagne enneigés' className='banner__img2' />
                </div>
            </section>
            <FaqItem question="Flabilité" reponse="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
            <FaqItem question="Respect" reponse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <FaqItem question="Service" reponse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <FaqItem question="Sécurité" reponse="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aulocataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
    );
};
export default APropos;