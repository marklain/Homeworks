import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import TeamPage from '../team';
import StackPage from '../stack';
import CareerPage from '../career';
import { addActiveClassToLink } from '../../API';

export default class AboutPage extends React.Component {
    componentDidMount() {
        addActiveClassToLink('AboutNav__link');
    }

    render() {
        const { match } = this.props;
        return (
            <div className="AboutPage">
                <div className="AboutPage__nav">
                    <nav className="AboutNav">
                        <Link to={`${match.path}/team`} className="AboutNav__link">The team</Link>
                        <Link to={`${match.path}/stack`} className="AboutNav__link">our stack</Link>
                        <Link to={`${match.path}/career`} className="AboutNav__link">career</Link>
                    </nav>
                </div>
                <div className="AboutPage__body">
                    <Switch>
                        <Route path={`${match.path}/team`} component={TeamPage}/>
                        <Route path={`${match.path}/stack`} component={StackPage}/>
                        <Route path={`${match.path}/career`} component={CareerPage}/>
                    </Switch>
                </div>
            </div>
        )
    }
};
