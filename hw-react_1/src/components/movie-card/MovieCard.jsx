import React from 'react';
import ChipsListItem from './ChipsListItem';
import movies from './movies';

export default class MovieCard extends React.Component {
    render() {
        let { title, descr, rating } = this.props;
        return (<div className="MovieCard">
            <button className="MovieCard__btn MovieCard__btn--del">delete</button>
            <div className="MovieInfo__info">
                <h2 className="MovieInfo__title">{title}</h2>
                <p className="MovieInfo__descr">{descr}</p>
                <p className="MovieInfo__rating">Rating: {rating}</p>
            </div>
            <ul className="ChipsList">{this.props.chipList}</ul>

        </div>)
    }
}
