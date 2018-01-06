import React from 'react';

const StackPage = (props) => {
        return (
                <ul className="StackList">
                    <li class="StackList__item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png" class="StackList__icon" title="html"/>
                    </li>
                    <li class="StackList__item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1000px-CSS3_logo_and_wordmark.svg.png" class="StackList__icon" title="css"/>
                    </li>
                    <li class="StackList__item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" class="StackList__icon" title="js"/>
                    </li>
                    <li class="StackList__item">
                        <img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" class="StackList__icon" title="webpack"/>
                    </li>
                    <li class="StackList__item">
                        <img src="https://cdn.worldvectorlogo.com/logos/react.svg" class="StackList__icon" title="react"/>
                    </li>
                    <li class="StackList__item">
                        <img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" class="StackList__icon" title="react-router"/>
                    </li>
                    <li class="StackList__item">
                        <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" class="StackList__icon" title="redux"/>
                    </li>
                </ul>
        );
}

export default StackPage;
