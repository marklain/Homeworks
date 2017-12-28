import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm';
import SearchCategories from '../SearchCategories';
import WatchList from '../WatchList';

const Sidebar = ({ searchFormSubmit, getData, watchListData, onDeleteWatchListItem }) => {
    return (
        <div className="App__sidebar">
            <SearchForm onFormSubmit={searchFormSubmit}/>
            <SearchCategories getData={getData} />
            <WatchList
                watchListCards={watchListData}
                onDeleteWatchListItem={onDeleteWatchListItem}
            />
        </div>
    )
};
Sidebar.propTypes = {
    onDeleteWatchListItem: PropTypes.func.isRequired,
    searchFormSubmit: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    watchListData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            img: PropTypes.string,
            descr: PropTypes.string,
            releaseDate: PropTypes.string,
            rating: PropTypes.number,
        })
    )
}
export default Sidebar;
