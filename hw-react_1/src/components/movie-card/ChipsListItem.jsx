import React, { Component } from 'react';

class ChipsListItem extends Component {

    render() {
        return (
            <li className="ChipsList__item">{this.props.genre}</li>
        );
    }

}

export default ChipsListItem;
