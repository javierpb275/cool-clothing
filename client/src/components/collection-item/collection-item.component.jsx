//This component is each item in the collections that come from shop data.

import React from 'react';

//REDUX:
import { connect } from 'react-redux';

//ACTIONS:
import { addItem } from '../../redux/cart/cart.actions';

//STYLES:
import { CollectionItemContainer, CollectionFooterContainer, AddButton, BackgroundImage, NameContainer, PriceContainer } from './collection-item.styles';



const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    );
};



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});



export default connect(null, mapDispatchToProps)(CollectionItem);