import React, {Component} from 'react';

class MovieForm extends Component {

    render() {
        return (
            <form class="MovieForm">
                <label class="MovieForm__label">
                    Title
                    <input type="text" class="MovieForm__input"/></label>
                <label class="MovieForm__label">
                    Description
                    <textarea class="MovieForm__txtarea" rows="8"></textarea>
                </label>
                <label class="MovieForm__label">
                    Rating
                    <select class="MovieForm__input">
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
                <button class="MovieForm__submit" type="submit">submit</button>
            </form>
            );
            }

}

export default MovieForm;
