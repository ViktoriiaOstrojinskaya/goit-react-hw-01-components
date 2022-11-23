import PropTypes from 'prop-types';
import {
  FriendTable,
  FriendCard,
  Status,
  Avatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendTable>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <Status>{friend.isOnline}</Status>
          <Avatar
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName>{friend.name}</FriendName>
        </FriendCard>
      ))}
    </FriendTable>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};
