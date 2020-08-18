import React from 'react';

//React-Router-Dom:
import { Switch, Route, Link } from 'react-router-dom';

//STYLES:
import './App.css';

//PAGES:
import HomePage from './pages/homepage/homepage.component';


const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
    <Link to={`${props.match.url}/13`}>hat 13</Link>
    <Link to={`${props.match.url}/14`}>hat 14</Link>
    <Link to={`${props.match.url}/15`}>hat 15</Link>
  </div>
);

const Hat = (props) => (
  <div>
    <h1>HAT NUMBER: {props.match.params.hatId}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  exact path='/hats' component={HatsPage} />
      <Route  path='/hats/:hatId' component={Hat} />
      </Switch>
    </div>
  );
}

export default App;
