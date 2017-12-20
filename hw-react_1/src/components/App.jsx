import React from 'react';
import NavList from 'components/NavList';
import MovieForm from 'components/MovieForm';
import MovieCardsList from 'components/MovieCardsList';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="Header">
                    <h1 className="Header__logo">movie mate</h1>
                    <NavList />
                </header>
                <div className="App__body">
                    <MovieCardsList />
                    <MovieForm />
                </div>

            </div>
        )
    }
};
export default App;
