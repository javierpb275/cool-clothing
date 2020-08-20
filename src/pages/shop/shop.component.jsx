//This shop page displays previews of our collections (hats, sneakers, etc). Because we need to store the data related to our collections on our shop page, our shop page is a class component.

import React from 'react';

//List of products:
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            collections: SHOP_DATA

        }

    }
}