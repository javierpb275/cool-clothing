//This component represents the items from a specific collection (hats, pants...):

import React from 'react';

//REACT-REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

//COMPONENTS:
import CollectionPreview from '../collection-preview/collection-preview.component';

//STYLES:
import { CollectionsOverviewContainer } from './collections-overview.styles';



const CollectionsOverview = ({ collections }) => (

    <CollectionsOverviewContainer>

        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }

    </CollectionsOverviewContainer>

);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});



export default connect(mapStateToProps)(CollectionsOverview);