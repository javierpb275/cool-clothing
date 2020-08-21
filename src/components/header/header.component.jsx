//This component is the top of our website where we have all the links (Sign In, Shop...), the cart and the logo of our App

import React from 'react';

//React-Router-Dom:
import { Link } from 'react-router-dom';

//ASSETS:
import Logo from '../../assets/logo-cool-clothing.png';

//STYLES: 
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/' >
        <div className='logo'>{Logo}</div>
        </Link>
    </div>
);

export default Header;