import React, {Component} from 'react';
import PropTypes from 'prop-types'
import MovieCard from 'components/MovieCard';

export default class MovieCardsList extends Component {
    static propTypes = {
        movieBase: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                descr: PropTypes.string.isRequired,
                rating: PropTypes.string.isRequired,
                genres: PropTypes.array.isRequired
            })
        ).isRequired,
        onCardDelete: PropTypes.func.isRequired
    }

    render() {
        let { movieBase, onCardDelete } = this.props;

        const items = movieBase.map((movie) => {
            return (
                <MovieCard
                    key={movie.id}
                    {...movie}
                    chipList={movie.genres.map(genre => <li className="ChipsList__item">{genre}</li>)}
                    cardDeleter={() => onCardDelete(movie.id)}
                />

            )
        })
        return (
            <div className="MovieList">
                {items}
            </div>
        )
    }
}
