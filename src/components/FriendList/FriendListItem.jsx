import PropTypes from 'prop-types';
import { FriendCard, Status, Avatar, FriendName } from './FriendList.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <FriendCard>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
