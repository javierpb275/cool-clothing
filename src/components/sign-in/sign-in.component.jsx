//This component is a signin form wuere the user can sign in with its user account or with the google account by using firebase
//It is a class component because we have to store what user is typing in.

import React from 'react';

//STYLES:
import './sign-in.styles.scss';

class SignIn extends React.Component {
    contructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    //This function prevents the default submit action from firing because we want full control over exactly what this submit is gonna do. 
    //And then we will clear out our fields "this.setState({ email: '', password: '' })"
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" value={this.state.email} required/>
                    <label>Email</label>
                    <input name="password" value={this.state.password} required/>
                    <label>Password</label>
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}

export default SignIn;