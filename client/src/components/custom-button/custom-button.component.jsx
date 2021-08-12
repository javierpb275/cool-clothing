//This button is a reusable button component that we use in different places in our application:

import React from 'react';

//STYLES:
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;