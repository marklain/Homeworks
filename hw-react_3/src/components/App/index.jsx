import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import MoviesPage from '../../pages/movies';
import HomePage from '../../pages/home';
import AboutPage from '../../pages/about';

export default class App extends Component {

    componentDidMount() {
        this._addActiveClassToNavLinks();
    }

    _addActiveClassToNavLinks = () => {
        const NavLinks = document.querySelectorAll('.Navigation__link');
        NavLinks.forEach(link => {
            link.addEventListener('click', e => {
                NavLinks.forEach(link => {
                    link.classList.remove('Navigation__link--active');
                })
                link.classList.add('Navigation__link--active');
            });
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path='/' render={() => <HomePage NavLinks={this.NavLinks} />}/>
                    <Route path='/movies' component={MoviesPage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        );
  }
};
