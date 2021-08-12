//This component is the page of each collection (hats, snowboards, gloves...) where we display only that kind of item (ex: hats page):

import React, {useEffect} from 'react';

//REACT-REDUX:
import { connect } from 'react-redux';

//SELECTOR:
import { selectCollection } from '../../redux/shop/shop.selectors';

//COMPONENTS:
import CollectionItem from '../../components/collection-item/collection-item.component';//component that displays our item.

//STYLES:
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.styles';

//FIRESTORE:
import {firestore} from '../../firebase/firebase.utils';

const CollectionPage = ({ collection }) => {

  useEffect(() => {

    console.log('I am subscribing');

    const unsubscribeFromCollections = firestore
    .collection('collections')
    .onSnapshot(snapshot => console.log(snapshot))

    //This is a cleanup function. It's a useEffect calls when the component unmounts (componentWillUnmount())
    return () => {
      console.log('I am unsubscribing');
      unsubscribeFromCollections();
    }

  }, [])

  const { title, items } = collection;

  return(
    <CollectionPageContainer>

      <CollectionTitle>{title}</CollectionTitle>
        
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>

    </CollectionPageContainer>
  );
};



const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)

});



export default connect(mapStateToProps)(CollectionPage);