//This menu-item component is each of the images that you see in the homepage, inside of the directory component:
import React from 'react';

//REACT-ROUTER-DOM:
import { withRouter } from 'react-router-dom';

//STYLES:
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, history }) => (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);