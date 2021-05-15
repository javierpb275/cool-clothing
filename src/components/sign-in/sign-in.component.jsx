//This component is a signin form wuere the user can sign in with its user account or with the google account by using firebase
//It is a class component because we have to store what user is typing in.

import React from 'react';

//react-redux
import { connect } from 'react-redux';

//COMPONENTS:
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//FIREBASE:
import { auth } from '../../firebase/firebase.utils';//Authentication

//Actions:
import { googleSignInStart } from '../../redux/user/user.actions';

//STYLES:
import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles';

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
      const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null,mapDispatchToProps)(SignIn);
