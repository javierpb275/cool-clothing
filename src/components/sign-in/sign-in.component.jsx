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

    //This function prevents the default submit action from firing because we want full control over exactly what this submit is gonna do. 
    //And then we will clear out our fields "this.setState({ email: '', password: '' })"
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    //This function pulls both value and name off of our event.target (what the user types). 
    //The event.target will end up being the <input/> element itself and we want the name on that input (name='password') 
    //as well as the value (value={this.state.email}). And we dinamically setState so that sets that name by doing "[name]"
    //so it will render whatever value that "name" it will be. If "name=password" it will point to password and the same with email.
    //This way we can pass the same function to both inputs
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