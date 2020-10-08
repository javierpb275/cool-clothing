
//RESELECT:
import { createSelector } from 'reselect';


const COLLECTION_ID_MAP = {
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

//selectCollection output selector:
//This selector is used to get an specific collection (hats) so that we can display some specific items (CollectionPage):
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])  
);