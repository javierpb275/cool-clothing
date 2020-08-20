import React from 'react';

//React-Router-Dom:
import { Switch, Route } from 'react-router-dom';

//STYLES:
import './App.css';

//PAGES:
import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';




function App() {
  return (
    <div>
      <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
