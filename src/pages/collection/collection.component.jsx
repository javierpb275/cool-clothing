//This component is the page of each collection (hats, snowboards, gloves...) where we display only that kind of item (ex: hats page):

import React from 'react';

//COMPONENTS:
import CollectionItem from '../../components/collection-item/collection-item.component';//component that displays our item.

//STYLES:
import './collection.styles.scss';



const CollectionPage = ({ match }) => (
    <div className='category'>
        <h2>COLLECTION PAGE</h2>
    </div>
);



export default CollectionPage;