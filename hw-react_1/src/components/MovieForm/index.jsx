import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MovieForm extends Component {
    static propTypes = {
        onCardAdd: PropTypes.func.isRequired
    }
    render() {
        return (
            <form
                ref={node => this.movieForm = node}
                onSubmit={(e) => {
                    e.preventDefault();
                    let genres = [];
                    if (this.addedTitle.value !== '' && this.addedDescr.value !== '') {
                        if (this.dramaBox.checked) {
                            genres.push('drama');
                        }
                        if (this.actionBox.checked) {
                            genres.push('action');
                        }
                        if (this.comedyBox.checked) {
                            genres.push('comedy');
                        }
                        this.props.onCardAdd(this.addedTitle.value, `${this.addedDescr.value}...`, `${this.addedRating.value}/10`, genres);
                    } else alert ('Please fill out form fields!');
                    this.movieForm.reset();
                }}
                className="MovieForm"
            >
                <label className="MovieForm__label">
                    Title
                    <input ref={node => this.addedTitle = node} type="text" className="MovieForm__input"/></label>
                <label className="MovieForm__label">
                    Description
                    <textarea ref={node => this.addedDescr = node} className="MovieForm__txtarea" rows="8"></textarea>
                </label>
                <label className="MovieForm__label">
                    Rating
                    <select ref={node => this.addedRating = node} className="MovieForm__input">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value = "10" > 10</option>
                    </select>
                </label>
                <div className="MovieForm__genres">
                    <label><input ref={node => {this.dramaBox = node}} type="checkbox" value="drama"/>drama</label>
                    <label><input ref={node => {this.actionBox = node}} type="checkbox" value="action"/>action</label>
                    <label><input ref={node => {this.comedyBox = node}} type="checkbox" value="comedy"/>comedy</label>
                </div>
                <button className="MovieForm__submit" type="submit">submit</button>
            </form>
            );
            }

};
