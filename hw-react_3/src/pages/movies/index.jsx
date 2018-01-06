import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import MovieList from '../../components/MovieList';
import { fetchData } from '../../API';

export default class MoviesPage extends Component {
    state = {
        movieItems: [],
        watchList: []
    }
    componentWillMount() {
        fetchData('https://api.themoviedb.org/3/movie/popular?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&page=1')
        .then(data => {
            this.setState({
                movieItems: data,
                watchList: JSON.parse(localStorage.getItem('movie-watch-list')) || []
            })
        })

    }
    componentDidMount() {
        this._addActiveClassToBtns();
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
    _addActiveClassToBtns = () => {
        const searchCategoriesBtns = document.querySelectorAll('.SearchCategories__btn');

        searchCategoriesBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                searchCategoriesBtns.forEach(btn => {
                    btn.classList.remove('SearchCategories__btn--active');
                })
                btn.classList.add('SearchCategories__btn--active');
            });
        });
    }
    render() {
        return (
                <div className="MoviesPage">
                    <Sidebar
                        getData={this._getDataFromDatabase}
                        searchFormSubmit={this._onMovieSearch}
                        watchListData={this.state.watchList}
                        onDeleteWatchListItem={this._deleteFromWatchList}
                    />
                    <MovieList addToWatchList={this._addToWatchList} movies={this.state.movieItems}/>
                </div>
        );
  }
};
