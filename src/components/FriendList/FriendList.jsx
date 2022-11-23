import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendTable } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
