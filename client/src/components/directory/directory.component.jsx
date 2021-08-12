//This Directory component is in charge of displaying the MenuItem component and each section represents a MenuItem.

import React from 'react';

//REACT-REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectDirectorySections } from '../../redux/directory/directory.selectors';//These are all our different sections in our shop.

//COMPONENTS:
import MenuItem from '../menu-item/menu-item.component';

//STYLES:
import { DirectoryMenuContainer } from './directory.styles';



const Directory = ({ sections }) => (
        
  <DirectoryMenuContainer>

    {
      sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>//{...otherSectionProps} = " linkUrl={linkUrl}  title={title} imageUrl={imageUrl} size={size} "
        ))
    }

    </DirectoryMenuContainer>
        
  );



const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});



export default connect(mapStateToProps)(Directory);