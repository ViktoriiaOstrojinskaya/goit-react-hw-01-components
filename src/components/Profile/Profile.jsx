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
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsListItem>
        <StatsListItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsListItem>
        <StatsListItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
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
