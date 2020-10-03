
//RESELECT:
import { createSelector } from 'reselect';


//selectDirectory input selector:
const selectDirectory = state => state.directory;


//selectDirectorySections output selector:
//This is all the products that we have available in our shop:
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);