//This Directory component is in charge of displaying the MenuItem component and each section represents a MenuItem.

import React from 'react';

//COMPONENTS:
import MenuItem from '../menu-item/menu-item.component';

//STYLES:
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'gloves',
                    imageUrl: 'https://onlinebest.ca/wp-content/uploads/2019/04/7-Best-Heated-Ski-Gloves-for-Men-and-Women-930x620.jpg',
                    id: 1,
                    linkUrl: 'shop/gloves'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://ridestore.imgix.net/catalog/product/e/6/e6208_20_1_2.jpg?w=320&auto=format&q=50',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'pants',
                    imageUrl: 'https://ae01.alicdn.com/kf/H31058872bf71445591280080da798396i.jpg',
                    id: 3,
                    linkUrl: 'shop/pants'
                  },
                  {
                    title: 'boots',
                    imageUrl: 'https://cdn.trendhunterstatic.com/thumbs/adidas-snowboarding-boots.jpeg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/boots'
                  },
                  {
                    title: 'snowboards',
                    imageUrl: 'https://www.tactics.com/a/bke6/e/bestparksnowboards.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/snowboards'
                  }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>//{...otherSectionProps} = " linkUrl={linkUrl}  title={title} imageUrl={imageUrl} size={size} "
                ))
                }
            </div>
        )
    }
}

export default Directory;