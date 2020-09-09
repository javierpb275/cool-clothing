//This component is a signup form where the user can sign up with its user account and register:

import React from 'react';

//COMPONENTS:
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//FIREBASE:
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

//STYLES:
import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    //handleSubmit prevents the default submit action from firing, checks if the passwords match and then creates a new user;
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password != confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, { displayName });

        }

        catch {
            
        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>

                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
                />

                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='Email'
                required
                />

                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required
                />

                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='Confirm Password'
                required
                />

                <CustomButton type="submit"> 
                Sign Up 
                </CustomButton>



                </form>
            </div>
        )
    }
}

export default SignUp;