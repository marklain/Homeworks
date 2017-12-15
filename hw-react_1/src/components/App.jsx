import React from 'react';
import NavListItem from './Nav-list-item';
import MovieCard from './Movie-card';
import MovieForm from './Movie-form';
import movies from '../movies.js';
import ChipsListItem from './Chip-list-item';

class App extends React.Component {
    render() {

        const items = movies.map(movie => {
            return (
                <MovieCard
                    {...movie}
                    chipList={movie.genres.map(genre => <li className="ChipsList__item">{genre}</li>)}
                />
            )
        })
        return (
            <div className="App">
                <header className="Header">
                    <h1 className="Header__logo">movie mate</h1>
                    <ul className="Navigation">
                        <NavListItem link="Login"/>
                        <NavListItem link="Browse"/>
                        <NavListItem link="About"/>
                    </ul>
                </header>
                <div className="App__body">
                    <div className="MovieList">
                        {items}
                    </div>
                    <MovieForm />
                </div>

            </div>
        )
    }
};
export default App;
