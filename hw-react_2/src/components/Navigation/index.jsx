import React from 'react';

const Navigation = (props) => {

        return (
            <ul className="Navigation">
                <li className="Navigation__item">
                    <a href="http://google.com" className="Navigation__link">login</a>
                </li>
                <li className="Navigation__item">
                    <a href="http://google.com" className="Navigation__link">browse</a>
                </li>
                <li className="Navigation__item">
                    <a href="http://google.com" className="Navigation__link">about</a>
                </li>
            </ul>
        )
};

export default Navigation;
