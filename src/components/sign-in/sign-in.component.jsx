//This component is a signin form wuere the user can sign in with its user account or with the google account by using firebase
//It is a class component because we have to store what user is typing in.

import React from 'react';

//COMPONENTS:
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//FIREBASE:
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';//Authentication

//STYLES:
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    //handleSubmit prevents the default submit action from firing and then we will clear out our fields 
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' });

        }

        catch(error) {

            console.log(error);

        }

        
    };

    //handleChange gets the input by the name (name="email") and changes its value (what the user types in)
    handleChange = event => {
        const { value, name } = event.target;
        
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required
                    />
                    

                    <FormInput
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="password"
                    required
                    />

                    <div className='buttons'>
    
                    <CustomButton type="submit"> 
                    Sign In 
                    </CustomButton>

                    <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn> 
                    Sign In With Google
                    </CustomButton>

                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;