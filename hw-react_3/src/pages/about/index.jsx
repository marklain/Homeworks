import React from 'react';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import TeamPage from '../team';
import StackPage from '../stack';
import CareerPage from '../career';

const AboutPage = ({match}) => {
    return (
        <div className="AboutPage">
            <div className="AboutPage__nav">
                <nav className="AboutNav">
                    <NavLink to={`${match.path}/team`} activeClassName="AboutNav__link--active" className="AboutNav__link">The team</NavLink>
                    <NavLink to={`${match.path}/stack`} activeClassName="AboutNav__link--active" className="AboutNav__link">our stack</NavLink>
                    <NavLink to={`${match.path}/career`} activeClassName="AboutNav__link--active" className="AboutNav__link">career</NavLink>
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
};
export default AboutPage;
