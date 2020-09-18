//This component is a preview of four items of each collection and it will be display in our ShopPage component.
//We pass the items as props and we map through them so we can pass its properties to the CollectionItem component, which represents each item.
//And now we can display all the items using the CollectionItem component and passing those properties of each item from shop data.

import React from 'react';

//COMPONENTS
import CollectionItem from '../collection-item/collection-item.component';

//STYLES:
import './collection-preview.styles.scss';



const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                .map((item) => (

                <CollectionItem key={item.id} item={item}/> 
                
                ))
            }
        </div>
    </div>
);



export default CollectionPreview;