import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = (props) => (
    <nav className="Navigation">
        <Link id="linkToHome" to="/" className="Navigation__link Navigation__link--active">Home</Link>
        <Link id="linkToMovies" to="/movies" className="Navigation__link">movies</Link>
        <Link id="linkToAbout" to="/about" className="Navigation__link">about</Link>
    </nav>

);

export default Navigation;
