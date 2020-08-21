//This component is the top of our website where we have all the links (Sign In, Shop...), the cart and the logo of our App

import React from 'react';

//React-Router-Dom:
import { Link } from 'react-router-dom';

//STYLES: 
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='/'>LOGO</Link>

    </div>
);

export default Header;