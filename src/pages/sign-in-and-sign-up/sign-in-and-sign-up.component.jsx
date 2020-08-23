//This component is our sign in and sign up page where the user can enter with their account or register a new user.
//The user can sign in with google instead of  typing all their info or having to register.

import React from 'react';

//COMPONENTS:
import SignIn from '../../components/sign-in/sign-in.component';

//STYLES:
import './sign-in-and-sign-up.styles.scss';



const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
    </div>
);

export default SignInAndSignUpPage;