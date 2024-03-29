//This shop page displays previews of our collections (hats, sneakers, etc). Because we need to store the data related to our collections on our shop page, our shop page is a class component.
//In this page we are displaying all the collection with its items by mapping through them

import React, {useEffect} from 'react';

//REACT-ROUTER-DOM:
import { Route } from 'react-router-dom';

//REACT-REDUX:
import { connect } from 'react-redux';

//COMPONENTS:
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

//SHOP ACTIONS:
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';//this actions fires the saga fetchCollectionsAsync()


const ShopPage = ({match, fetchCollectionsStart}) => {

    useEffect(() => {
       fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}  component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);