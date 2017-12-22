import React from 'react';
import NavList from 'components/NavList';
import MovieForm from 'components/MovieForm';
import MovieCardsList from 'components/MovieCardsList';
import movies from 'movies.js';
import v4 from 'uuid/v4';

class App extends React.Component {
    state = {
        movieBase: movies
    }
    _cardDeleter = id => {
        this.setState({
            movieBase: this.state.movieBase.filter(movie => movie.id != id)
        })
    }
    _cardAdder = (title, descr, rating, genres) => {
        let movie = {
            id: v4(),
            title: title,
            descr: descr,
            rating: rating,
            genres: genres
        };
        this.setState({
            movieBase: [...this.state.movieBase, movie]
        })
    }
    render() {
        return (
            <div className="App">
                <header className="Header">
                    <h1 className="Header__logo">movie mate</h1>
                    <NavList />
                </header>
                <div className="App__body">
                    <MovieCardsList
                        movieBase={this.state.movieBase}
                        onCardDelete = {this._cardDeleter}
                    />
                    <MovieForm onCardAdd={this._cardAdder}/>
                </div>

            </div>
        )
    }
};
export default App;
