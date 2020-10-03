
//RESELECT:
import { createSelector } from 'reselect';



//selectShop input selector:
const selectShop = state => state.shop;



//output selector:
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);