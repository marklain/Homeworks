import React from 'react';
import { NavLink } from 'react-router-dom';


const HomePage = ({ NavLinks }) => (
    <div className="Home">
        <img src="https://axzerk.github.io/react-minicourse/hw-04/static/media/clapperboard.2e065d52.svg" alt="icon" className="Home__icon"/>
        <h1 className="Home__title">Welcome to Movie Mate</h1>
        <p className="Home__text">This is a single page application that lets you manage all kinds of movies.</p>
        <p className="Home__text">
            If you wish to learn more about Movie Mate visit
            <NavLink to="/about" className="Home__link">About Page</NavLink>
        </p>
        <p className="Home__text">
            Or start browsing right now in
            <NavLink to="/movies" className="Home__link">Movie Gallery</NavLink>
        </p>
    </div>
);

export default HomePage;
