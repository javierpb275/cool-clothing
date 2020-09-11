import React from 'react';
import ReactDOM from 'react-dom';

//React-Router-Dom:
import { BrowserRouter } from 'react-router-dom';

//REDUX:
import { Provider } from 'react-redux';//Provider: It gives us access to all of the things related to the store object (redux state)

//STYLES:
import './index.css';

//COMPONENTS
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


