import PropTypes from 'prop-types';
import css from './Friend.module.css';

const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
