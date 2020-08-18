import React from 'react';

//React-Router-Dom:
import { Switch, Route, Link } from 'react-router-dom';

//STYLES:
import './App.css';

//PAGES:
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Link to='/hats'>
      <h1>HATSPAGE</h1>
      </Link>
      <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
