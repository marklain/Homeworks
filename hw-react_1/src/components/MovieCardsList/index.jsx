import React, {Component} from 'react';
import movies from 'movies.js';
import MovieCard from 'components/MovieCard';

export default class MovieCardsList extends Component {
    render() {
        const items = movies.map((movie) => {
            return (
                <MovieCard
                    key={movie.id}
                    {...movie}
                    chipList={movie.genres.map(genre => <li className="ChipsList__item">{genre}</li>)}
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
