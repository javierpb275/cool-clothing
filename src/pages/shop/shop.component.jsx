//This shop page displays previews of our collections (hats, sneakers, etc). Because we need to store the data related to our collections on our shop page, our shop page is a class component.
//In this page we are displaying all the collection with its items by mapping through them

import React from 'react';

//REACT-ROUTER-DOM:
import { Route } from 'react-router-dom';

//COMPONENTS:
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';


const ShopPage = ({ match }) => (

    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    </div>

);
    

export default ShopPage;