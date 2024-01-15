import React, { useState } from 'react';

const DropDownInformations = ({ question, reponse }) => {
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

export default DropDownInformations;

