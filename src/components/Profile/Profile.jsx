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
  Label,
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
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsListItem>
        <StatsListItem>
          <Label>Likes</Label>
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
