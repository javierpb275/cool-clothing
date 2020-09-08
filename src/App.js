import React from 'react';

//React-Router-Dom:
import { Switch, Route } from 'react-router-dom';

//FIREBASE:
import { auth, createUserProfileDocument } from './firebase/firebase.utils';// auth: Authentication.

//STYLES:
import './App.css';

//PAGES:
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//COMPONENTS:
import Header from './components/header/header.component';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  //This property is used in componentDidMount() and turned into a function and then passed to the componentWillUnmount() in order to
  //be able unsubscribe our current user:
  unsubscribeFromAuth = null;

  //This function takes care of subscribing the user: 
  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

      }

      else {

        this.setState({currentUser: userAuth});

      }

    });

  }

  //This function takes care of unsubscribing the user:
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
