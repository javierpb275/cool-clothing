//This component is the page of each collection (hats, snowboards, gloves...) where we display only that kind of item (ex: hats page):

import React from 'react';

//REACT-REDUX:
import { connect } from 'react-redux';

//SELECTOR:
import { selectCollection } from '../../redux/shop/shop.selectors';

//COMPONENTS:
import CollectionItem from '../../components/collection-item/collection-item.component';//component that displays our item.

//STYLES:
import './collection.styles.scss';



const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
);



const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)

});



export default connect(mapStateToProps)(CollectionPage);