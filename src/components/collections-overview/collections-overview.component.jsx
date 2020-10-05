//This component represents the items from a specific collection (hats, pants...):

import React from 'react';

//REACT-REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectCollections } from '../../redux/shop/shop.selectors';

//COMPONENTS:
import CollectionPreview from '../collection-preview/collection-preview.component';

//STYLES:
import './collections-overview.styles.scss';



const CollectionsOverview = ({ collections }) => (

    <div className='collections-overview'>

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



export default connect(mapStateToProps)(CollectionsOverview);