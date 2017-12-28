import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../MovieListItem';

const MovieList = ({ movies, addToWatchList }) => {

        return (
            <div className="MovieList">
                {movies.map(movie => (<MovieListItem adderToWatchList={addToWatchList} key={movie.id} {...movie}/>))}
            </div>
        );
};

MovieList.propTypes = {
    addToWatchList: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            descr: PropTypes.string.isRequired,
            releaseDate: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};

export default MovieList;
