//This component is the top of our website where we have all the links (Sign In, Shop...), the cart and the logo of our App

import React from 'react';

//REDUX:
import { connect } from 'react-redux';// "connect" is a higher order component that lets us modify our component to have access to things related to redux.

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectCartHidden } from '../../redux/cart/cart.selectors';//cart
import { selectCurrentUser } from '../../redux/user/user.selectors';//user

//ACTIONS:
import { signOutStart } from '../../redux/user/user.actions';

//COMPONENTS:
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

//ASSETS:
import Logo from '../../assets/logo-cool-clothing.png';

//STYLES: 
import { HeaderContainer, LogoContainer, LogoImg, OptionsContainer, OptionLink } from './header.styles';


const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>

        <LogoContainer  to='/' >
        <LogoImg alt='logo-img' src={Logo}/>
        </LogoContainer>


        <OptionsContainer>

        <OptionLink to='/shop' >
        SHOP
        </OptionLink>

        <OptionLink to='/shop' >
        CONTACT
        </OptionLink>

        {
            currentUser ?
            <OptionLink as='div' onClick={signOutStart}>
                SIGN OUT
            </OptionLink>
            :
            <OptionLink to='/signin'>
                SIGN IN
            </OptionLink>
        }

        <CartIcon/>

        </OptionsContainer>

        {
            hidden ? null : <CartDropdown/>
        }

    </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  });

export default connect(mapStateToProps, mapDispatchToProps)(Header);