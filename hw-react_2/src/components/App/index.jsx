import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MovieList from '../MovieList';
import { fetchData } from '../../API';

export default class App extends Component {
    state = {
        movieItems: [],
        watchList: []
    }
    componentWillMount() {
        fetchData('https://api.themoviedb.org/3/movie/popular?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&page=1')
        .then(data => {
            this.setState({
                movieItems: data,
                watchList: JSON.parse(localStorage.getItem('movie-watch-list'))
            })
        })

    }

    _onMovieSearch = (query) => {
        fetchData(`https://api.themoviedb.org/3/search/movie?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&query=${query}&page=1`)
        .then(data => {
            this.setState({
                movieItems: data
            })
        })
    }

    _addToWatchList = id => {
        if (this.state.watchList.filter(movie => movie.id ===id).length === 0) {
            let watchListItem = this.state.movieItems.filter(movie => movie.id === id);
            this.setState(prevState => ({
                movieItems: prevState.movieItems,
                watchList: [...prevState.watchList, ...watchListItem]
            }))
        } else alert('This movie already in your watchlist');
        setTimeout(() => {
            let watchList = JSON.stringify(this.state.watchList);
            localStorage.setItem('movie-watch-list', watchList);
        }, 100);
    }

    _deleteFromWatchList = id => {
        let watchList = this.state.watchList.filter(movie => movie.id !== id);
        this.setState(prevState => ({
            movieItems: prevState.movieItems,
            watchList: watchList
        }));
        setTimeout(() => {
            let watchList = JSON.stringify(this.state.watchList);
            localStorage.setItem('movie-watch-list', watchList);
        }, 100);
    }

    _getDataFromDatabase = (url) => {
        fetchData(url).then(data => {
            this.setState({
                movieItems: data
            })
        })
    }
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App__body">
                    <Sidebar
                        getData={this._getDataFromDatabase}
                        searchFormSubmit={this._onMovieSearch}
                        watchListData={this.state.watchList}
                        onDeleteWatchListItem={this._deleteFromWatchList}
                    />
                    <MovieList addToWatchList={this._addToWatchList} movies={this.state.movieItems}/>
                </div>
            </div>
        );
  }
};
