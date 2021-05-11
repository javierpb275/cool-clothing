//COLLECTIONS OVERVIEW CONTAINER:

//containers do not render anything. They just pass props down to components:

//Container for the collection-overview component

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//compose lets us pass (connect(mapStateToProps), WithSpinner) in (CollectionOverview)
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

//compose allows us to evaluate multiple curried functions where the function returns another function
//that expects sth to be passed to it and allows you to chain them all together
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps), 
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;