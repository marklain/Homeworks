import React from 'react';
import PropTypes from 'prop-types';
import WatchListCard from '../WatchListCard';


const WatchList = ({watchListCards, onDeleteWatchListItem}) => {
    if (watchListCards.length > 0) {
        return (
            <div className="Watchlist">
                <h2 className="Watchlist__title">Watchlist</h2>
                {watchListCards.map(movie => <WatchListCard onDeleteWatchListItem={onDeleteWatchListItem} key={movie.id} {...movie}/>)}
            </div>
        )
    }
    else {
        return (
            <div className="Watchlist">
                <h2 className="Watchlist__title">Watchlist</h2>
                <p className="Watchlist__msg">Add movies to watchlist...</p>
            </div>
        );
    }
}
WatchList.propTypes = {
    onDeleteWatchListItem: PropTypes.func.isRequired,
    watchListCards: PropTypes.arrayOf(
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

export default WatchList;
