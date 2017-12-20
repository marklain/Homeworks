import React from 'react';
import PropTypes from 'prop-types';


export default class MovieCard extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        chipList: PropTypes.arrayOf(
            PropTypes.shape().isRequired
        ).isRequired
    }

    render() {
        let { title, descr, rating, chipList } = this.props;
        return (
            <div className="MovieCard">
                <button className="MovieCard__btn MovieCard__btn--del">delete</button>
                <div className="MovieInfo__info">
                    <h2 className="MovieInfo__title">{title}</h2>
                    <p className="MovieInfo__descr">{descr}</p>
                    <p className="MovieInfo__rating">Rating: {rating}</p>
                </div>
                <ul className="ChipsList">{chipList}</ul>
            </div>
        )
    }
}
