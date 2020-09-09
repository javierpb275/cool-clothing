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

    render() {
        const { displayName } = this.state;
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
                required/>

                </form>
            </div>
        )
    }
}