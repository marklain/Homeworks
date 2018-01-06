import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import MemberCard from '../../components/MemberCard';
import { addActiveClassToLink } from '../../API';
import teamMembers from '../../teamMembers';

export default class TeamPage extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
                isExact: PropTypes.bool.isRequired,
                params: PropTypes.shape().isRequired,
                path: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
            }).isRequired
    }

    componentDidMount() {
        addActiveClassToLink('TeamList__members__link');
    }

    render() {
        const { match } = this.props;
        return (
            <div className="TeamList">
                <ul className="TeamList__members">
                    {teamMembers.map(member => (
                        <li key={member.id}>
                            <Link to={`${match.path}/${member.id}`} className="TeamList__members__link">{member.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="TeamList__card">
                    <Switch>
                        <Route path={`${match.path}/0`} render={() => <MemberCard member={teamMembers.find(member => member.id === '0')}/>}/>
                        <Route path={`${match.path}/1`} render={() => <MemberCard member={teamMembers.find(member => member.id === '1')}/>}/>
                        <Route path={`${match.path}/2`} render={() => <MemberCard member={teamMembers.find(member => member.id === '2')}/>}/>
                    </Switch>
                </div>
            </div>
        );
    }

}
