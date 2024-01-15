import React from 'react';
import img2 from '@/img/source2.svg';
import DropDownInformations from '@/components/DropDownInformation'

const APropos = () => {
    return (
        <div>
            <section className='pbanner'>
                <div className='banner'>
                    <img src={img2} alt='Des montagne enneigés' className='banner__img2' />
                </div>
            </section>
            <DropDownInformations question="Flabilité" reponse="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
            <DropDownInformations question="Respect" reponse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <DropDownInformations question="Service" reponse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <DropDownInformations question="Sécurité" reponse="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aulocataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
    );
};
export default APropos;