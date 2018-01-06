import React from 'react';
import Navigation from '../Navigation';

const Header = (props) => {
        return (
            <header className="Header">
                <h1 className="Header__logo">movie mate</h1>
                <Navigation />
            </header>
        );

};

export default Header;
