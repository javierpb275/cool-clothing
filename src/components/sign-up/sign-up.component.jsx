//This component is a signup form where the user can sign up with its user account and register:

import React from 'react';

//COMPONENTS:
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//FIREBASE:
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

//STYLES:
import './sign-up.styles.scss';

