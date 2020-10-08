
//RESELECT:
import { createSelector } from 'reselect';


COLLECTION_ID_MAP = {
    gloves: 1,
    pants: 2,
    jackets: 3,
    boots: 4,
    snowboards: 5
}



//selectShop input selector:
const selectShop = state => state.shop;



//output selector:
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);