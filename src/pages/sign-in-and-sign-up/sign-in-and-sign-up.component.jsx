//This component is our sign in and sign up page where the user can enter with their account or register a new user.
//The user can sign in with google instead of  typing all their info or having to register.

import React from 'react';

//COMPONENTS:
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

//STYLES:
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';



const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn/>
        <SignUp/>
    </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;