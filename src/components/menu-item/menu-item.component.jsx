//This menu-item component is each of the images that you see in the homepage, inside of the directory component:

import React from 'react';

const MenuItem = ({ title }) => (
        <div className='menu-item'>
            <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;