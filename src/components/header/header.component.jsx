//This component is the top of our website where we have all the links (Sign In, Shop...), the cart and the logo of our App

import React from 'react';

//React-Router-Dom:
import { Link } from 'react-router-dom';

//REDUX:
import { connect } from 'react-redux';// "connect" is a higher order component that lets us modify our component to have access to things related to redux.

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
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);