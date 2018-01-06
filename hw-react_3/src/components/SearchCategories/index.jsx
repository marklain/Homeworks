import React from 'react';
import PropTypes from 'prop-types';


const SearchCategories = ({ getData }) => {
        return (
            <div className="SearchCategories">
                <button
                    onClick={() => getData('https://api.themoviedb.org/3/movie/popular?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&page=1')} className="SearchCategories__btn SearchCategories__btn--active">popular</button>
                <button
                    onClick={() => getData('https://api.themoviedb.org/3/movie/top_rated?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&page=1')} className="SearchCategories__btn">top rated</button>
                <button
                    onClick={() => getData('https://api.themoviedb.org/3/movie/upcoming?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&page=1')} className="SearchCategories__btn">upcoming</button>
            </div>
        )
};

SearchCategories.propTypes = {
    getData: PropTypes.func.isRequired
}
export default SearchCategories;
