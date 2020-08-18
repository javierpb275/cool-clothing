import React from 'react';

//COMPONENTS:
import Directory from '../../components/directory/directory.component';

//STYLES:
import './homepage.styles.scss';

const HomePage = (props) => (
    <div className='homepage'>
    <button onClick={() => props.history.push('/hats')}>
      <h1>HATSPAGE</h1>
      </button>
        <Directory/>    
    </div>
);

export default HomePage;