//This component is each item in the collections that come from shop data.

import React from 'react';

//STYLES:
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div className='image'></div>
    </div>
)

export default CollectionItem;