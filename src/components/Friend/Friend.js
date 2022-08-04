import PropTypes from 'prop-types';

const Friend = ({ avatar, name, isOnline, id }) => {
    return (
        <li className="item" key={id}>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

Friend.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friend;