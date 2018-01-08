import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, NavLink} from 'react-router-dom';
import MemberCard from '../../components/MemberCard';
import teamMembers from '../../teamMembers';

const TeamPage = ({match}) => {
    return (
        <div className="TeamList">
            <ul className="TeamList__members">
                {
                    teamMembers.map(member => (<li key={member.id}>
                        <NavLink to={`${match.path}/${member.id}`} activeClassName="TeamList__members__link--active" className="TeamList__members__link">
                            {member.name}
                        </NavLink>
                    </li>))
                }
            </ul>
            <div className="TeamList__card">
                <Switch>
                    <Route path={`${match.path}/0`} render={() => <MemberCard member={teamMembers.find(member => member.id === '0')}/>}/>
                    <Route path={`${match.path}/1`} render={() => <MemberCard member={teamMembers.find(member => member.id === '1')}/>}/>
                    <Route path={`${match.path}/2`} render={() => <MemberCard member={teamMembers.find(member => member.id === '2')}/>}/>
                </Switch>
            </div>
        </div>
    )
};

TeamPage.propTypes = {
    match: PropTypes.shape({
        isExact: PropTypes.bool.isRequired,
        params: PropTypes.shape().isRequired,
        path: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
};

export default TeamPage;
