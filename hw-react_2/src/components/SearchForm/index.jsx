import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onFormSubmit }) => {
        let input = null;
        return (
            <form onSubmit={(e) => {
                e.preventDefault();

                onFormSubmit(input.value.trim().split(' ').join('+'))
            }} className="SearchForm">
                <input type="text" className="SearchForm__input" ref={node => (input = node)} placeholder="Search for movies by name..."/>
                <button type="submit" className="SearchForm__btn">search</button>
            </form>
        )
}
SearchForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}
export default SearchForm;
