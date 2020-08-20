//This component is a preview of four items of each collection and it will be display in our ShopPage component.
//We pass the items as props and we map through them so we can display those items of each collection preview.

import React from 'react';

//STYLES:
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(item => (

                <div key={item.id}> 
                {item.name}
                </div>

                ))
            }
        </div>
    </div>
)

export default CollectionPreview;