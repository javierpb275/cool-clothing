//This is the main page of our App

import React from 'react';

//COMPONENTS:
import Directory from '../../components/directory/directory.component';

//STYLES:
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory/>    
    </HomePageContainer>
);

export default HomePage;