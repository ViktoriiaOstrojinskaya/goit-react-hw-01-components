import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  StatsList,
  Username,
  Tag,
  Location,
  StatsListItem,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsListItem>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatsListItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
