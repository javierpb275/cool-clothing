//This component is made just in order to give a cool style to the inputs of our form

import React from 'react';

//STYLES:
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            :
            null
        }
    </div>
);

export default FormInput;