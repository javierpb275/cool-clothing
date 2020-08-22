import React from 'react';

//React-Router-Dom:
import { Switch, Route } from 'react-router-dom';

//STYLES:
import './App.css';

//PAGES:
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//COMPONENTS:
import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      <Route  path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
