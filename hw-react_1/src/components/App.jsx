import React from 'react';
import NavListItem from './NavListItem';
import MovieCard from './movie-card/MovieCard';
import MovieForm from './movie-form/MovieForm';
import movies from './movie-card/movies';
import ChipsListItem from './movie-card/ChipsListItem';

class App extends React.Component {
    render() {
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
                        <MovieCard
                            {...movies[0]}
                            chipList={movies[0].genres.map(genre => <li className="ChipsList__item">{genre}</li>)}
                        />
                        <MovieCard
                            {...movies[1]}
                            chipList={movies[1].genres.map(genre => <li className="ChipsList__item">{genre}</li>)}
                        />
                        <MovieCard
                            {...movies[2]}
                            chipList={movies[2].genres.map(genre => <li className="ChipsList__item">{genre}</li>)}
                        />
                        <MovieCard
                            {...movies[3]}
                            chipList={movies[3].genres.map(genre => <li className="ChipsList__item">{genre}</li>)}
                        />
                        <MovieCard
                            {...movies[4]}
                            chipList={movies[4].genres.map(genre => <li className="ChipsList__item">{genre}</li>)}
                        />
                    </div>
                    <MovieForm />
                </div>

            </div>
        )
    }
};
export default App;
