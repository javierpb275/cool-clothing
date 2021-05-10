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

//FIRESTORE
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

//SHOP ACTIONS:
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        fetch('https://firestore.googleapis.com/v1/projects/cool-clothing-db-7b987/databases/(default)/documents/collections')
        .then(response => response.json())
        .then(collections => console.log(collections));
/*
        collectionRef.get().then(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        });
        this.setState({ loading: false});
*/
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
} 
    
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))

});

export default connect(null, mapDispatchToProps)(ShopPage);