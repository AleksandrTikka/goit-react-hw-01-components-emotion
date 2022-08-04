import Friend from '../Friend/Friend';
import PropTypes from 'prop-types';
export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map((friend) => 
                <Friend
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
  )}
</ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
};