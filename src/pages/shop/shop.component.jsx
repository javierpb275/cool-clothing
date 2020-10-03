//This shop page displays previews of our collections (hats, sneakers, etc). Because we need to store the data related to our collections on our shop page, our shop page is a class component.
//In this page we are displaying all the collection with its items by mapping through them

import React from 'react';

//REACT-REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectCollections } from '../../redux/shop/shop.selectors';


//COMPONENTS:
import CollectionPreview from '../../components/collection-preview/collection-preview.component';





const ShopPage = ({ collections }) => (

    <div className='shop-page'>

        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }

    </div>

);
    


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});
    


export default connect(mapStateToProps)(ShopPage);