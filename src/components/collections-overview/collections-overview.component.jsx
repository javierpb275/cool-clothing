//This component represents the items from a specific collection (hats, pants...):

import React from 'react';

//REACT-REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//STYLES:
import 'collections-overview.styles.scss';



const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>

    </div>
);



export default CollectionsOverview;