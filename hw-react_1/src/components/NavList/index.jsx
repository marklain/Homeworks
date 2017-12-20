import React from 'react';

export default class NavList extends React.Component {
    render() {
        return (
            <ul className="Navigation">
                <li className="Navigation__item">
                    <a href="#" className="Navigation__link">Login</a>
                </li>
                <li className="Navigation__item">
                    <a href="#" className="Navigation__link">Browse</a>
                </li>
                <li className="Navigation__item">
                    <a href="#" className="Navigation__link">About</a>
                </li>
            </ul>
        )
    }
};
