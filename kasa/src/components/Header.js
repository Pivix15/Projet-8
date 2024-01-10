import React from 'react';
import { Link } from 'react-router-dom';
import LogoKasa from '@/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img src={LogoKasa} alt='Logo kasa'/>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/propos">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;