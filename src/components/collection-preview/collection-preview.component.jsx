//This component is a preview of four items of each collection and it will be display in our ShopPage component.
//We pass the items as props and we map through them so we can pass its properties to the CollectionItem component, which represents each item.
//And now we can display all the items using the CollectionItem component and passing those properties of each item from shop data.

import React from 'react';

//REACT-ROUTER
import { withRouter } from 'react-router-dom';

//COMPONENTS
import CollectionItem from '../collection-item/collection-item.component';

//STYLES
import {CollectionPreviewContainer,TitleContainer,PreviewContainer} from './collection-preview.styles';


const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);


export default withRouter(CollectionPreview);