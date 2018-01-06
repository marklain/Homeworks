import React from 'react';
import PropTypes from 'prop-types';

const MovieListItem = ({ rating, id, img, title, descr, releaseDate, adderToWatchList }) => {

        return (
            <div className="MovieList__item">
                <div className="MovieCard">
                    <span className="MovieCard__rating">{rating}</span>
                    <img src={img} alt={title} className="MovieCard__poster"/>
                    <div className="MovieInfo">
                        <h2 className="MovieInfo__title">{title}</h2>
                        <p className="MovieInfo__descr">{descr}</p>
                        <p className="MovieInfo__release">Release date: {releaseDate}</p>
                    </div>
                    <button
                        onClick={(e) => {
                            adderToWatchList(id);
                        }}
                        className="MovieCard__btn"
                    >+</button>
                </div>
            </div>
        );
}

MovieListItem.propTypes = {
    id: PropTypes.number.isRequired,
    adderToWatchList: PropTypes.func.isRequired,
    rating: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
};
export default MovieListItem;
