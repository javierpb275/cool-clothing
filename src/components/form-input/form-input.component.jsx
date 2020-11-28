//This component is made just in order to give a cool style to the inputs of our form

import React from 'react';

//STYLES:
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './form-input.styles';

const FormInput = ({ handleChange, label, ...props}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props} />
        {label ? (
            <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabel>
        ) : null}
  </GroupContainer>
);

export default FormInput;