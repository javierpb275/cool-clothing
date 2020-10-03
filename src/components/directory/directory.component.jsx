//This Directory component is in charge of displaying the MenuItem component and each section represents a MenuItem.

import React from 'react';

//REACT-REDUX:
import { connect } from 'react-redux';

//RESELECT:
import { createStructuredSelector } from 'reselect';

//SELECTORS:
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

//COMPONENTS:
import MenuItem from '../menu-item/menu-item.component';

//STYLES:
import './directory.styles.scss';



const Directory = ({ sections }) => (
        
  <div className='directory-menu'>

    {
      sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>//{...otherSectionProps} = " linkUrl={linkUrl}  title={title} imageUrl={imageUrl} size={size} "
        ))
    }

    </div>
        
  );



const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});



export default connect(mapStateToProps)(Directory);