import React from 'react';
import WLogoKasa from '@/img/w-logo.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <img src={WLogoKasa} alt='Logo kasa'/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;