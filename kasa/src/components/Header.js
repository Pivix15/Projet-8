import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoKasa from '@/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img src={LogoKasa} alt='Logo kasa'/>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><NavLink to="/home" className={({isActive}) => isActive ? 'n-active' : ''}>Accueil</NavLink></li>
                    <li><NavLink to="/propos" className={({isActive}) => isActive ? 'n-active' : ''}>A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;