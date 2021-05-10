//This shop page displays previews of our collections (hats, sneakers, etc). Because we need to store the data related to our collections on our shop page, our shop page is a class component.
//In this page we are displaying all the collection with its items by mapping through them

import React from 'react';

//REACT-ROUTER-DOM:
import { Route } from 'react-router-dom';

//REACT-REDUX:
import { connect } from 'react-redux';

//COMPONENTS:
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

//SHOP ACTIONS:
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

//RESELECT:
import {createStructuredSelector} from 'reselect';
//SELECTORS:
import { selectIsCollectionFetching} from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
            </div>
        );
    }
} 

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});
    
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);