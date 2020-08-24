//This button is a reusable button component that we use in different places in our app.

import React from 'react';

//STYLES:
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;