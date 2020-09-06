//This component is the top of our website where we have all the links (Sign In, Shop...), the cart and the logo of our App

import React from 'react';

//React-Router-Dom:
import { Link } from 'react-router-dom';

//FIREBASE:
import { auth } from '../../firebase/firebase.utils';

//ASSETS:
import Logo from '../../assets/logo-cool-clothing.png';

//STYLES: 
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>

        <Link className='logo-container' to='/' >
        <img  className='logo' alt='logo-img' src={Logo}/>
        </Link>


        <div className='options'>

        <Link className='option' to='/shop' >
        SHOP
        </Link>

        <Link className='option' to='/shop' >
        CONTACT
        </Link>
        {
            currentUser ?
            <div></div>
            :
            <Link></Link>
        }
        </div>
    </div>
);

export default Header;