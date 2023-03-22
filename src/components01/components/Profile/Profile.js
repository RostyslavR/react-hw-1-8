import PropTypes from 'prop-types';
import { ProfileBox, Description, UserName, Stats } from './Profile.styled';

export const Profile = ({
  username,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox>
      <Description>
        <img src={avatar} alt="User avatar"  width="192" />
        <UserName>{username}</UserName>
        <p >@{tag}</p>
        <p >{location}</p>
      </Description>
      <Stats>
        <li>
          <span >Followers</span>
          <span >{followers}</span>
        </li>
        <li>
          <span >Views</span>
          <span >{views}</span>
        </li>
        <li>
          <span >Likes</span>
          <span >{likes}</span>
        </li>
      </Stats>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape(
    {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }.isRequired
  ),
};
