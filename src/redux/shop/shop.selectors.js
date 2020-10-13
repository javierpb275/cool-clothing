
//RESELECT:
import { createSelector } from 'reselect';



//selectShop input selector:
const selectShop = state => state.shop;


//output selector:
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


//selectCollection output selector:
//This selector is used to get an specific collection (hats) so that we can display some specific items (CollectionPage):
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam] 
);