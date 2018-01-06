import React from 'react';
import PropTypes from 'prop-types';


const WatchListCard = ({ img, id, title, releaseDate, rating, onDeleteWatchListItem }) => {

        return (
            <div className="WatchlistCard">
                <img src={img} alt="" className="WatchlistCard__img"/>
                <div className="WatchlistCard__body">
                    <h3 className="WatchlistCard__title">{title}</h3>
                    <p className="WatchlistCard__release">Released: {releaseDate}</p>
                    <p className="WatchlistCard__rating">Rating: {rating}</p>
                    <button onClick={() => {onDeleteWatchListItem(id)}} className="WatchlistCard__btn">-</button>
                </div>
            </div>
        );
}

WatchListCard.propTypes = {
    onDeleteWatchListItem: PropTypes.func.isRequired,
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    rating: PropTypes.number
}

export default WatchListCard;
