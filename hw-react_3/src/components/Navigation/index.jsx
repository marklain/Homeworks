import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = (props) => (
    <nav className="Navigation">
        <Link to="/" className="Navigation__link Navigation__link--active">Home</Link>
        <Link to="/movies" className="Navigation__link">movies</Link>
        <Link to="/about" className="Navigation__link">about</Link>
    </nav>

);

export default Navigation;
