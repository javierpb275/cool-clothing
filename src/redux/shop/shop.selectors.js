
//RESELECT:
import { createSelector } from 'reselect';



//selectShop input selector:
const selectShop = state => state.shop;


//output selector:
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


//selectCollectionsForPreview output selector:
//This selector turns our collections object into an array and then we map through each collection (hats, jackets...):
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);


//selectCollection output selector:
//This selector is used to get an specific collection (hats) so that we can display some specific items (CollectionPage):
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);

//this selector checks if it is fetching the collections 
export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);