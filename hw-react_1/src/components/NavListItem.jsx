import React from 'react';

class NavListItem extends React.Component {
    render() {
        return (
            <li className="Navigation__item">
                <a href="#" className="Navigation__link">{this.props.link}</a>
            </li>
        )
    }
}

export default NavListItem;
