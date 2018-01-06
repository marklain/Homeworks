import React from 'react';
import PropTypes from 'prop-types';

const MemberCard = ({ member }) => {
        return (
                <div className="MemberCard">
                    <img src={member.img} alt={member.name} className="MemberCard__img"/>
                    <div className="MemberCard__info">
                        <h2 className="MemberCard__name">{member.name}</h2>
                        <p className="MemberCard__pos">{member.position}</p>
                    </div>
                </div>
        );
}

MemberCard.propTypes = {
    member: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired,
}

export default MemberCard;
