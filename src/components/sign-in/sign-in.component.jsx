//This component is a signin form wuere the user can sign in with its user account or with the google account by using firebase
//It is a class component because we have to store what user is typing in.

import React from 'react';

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
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

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

                    <input 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    required
                    />
                    <label>Email</label>

                    <input 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    required
                    />
                    <label>Password</label>

                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}

export default SignIn;