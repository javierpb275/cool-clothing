//This component is each item in the collections that come from shop data.

import React from 'react';

//COMPONENTS:
import CustomButton from '../custom-button/custom-button.component';

//STYLES:
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}/>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            <CustomButton inverted> ADD to cart</CustomButton>
    </div>
)

export default CollectionItem;