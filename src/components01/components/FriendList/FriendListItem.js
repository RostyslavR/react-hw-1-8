import PropTypes from 'prop-types';
import { Status } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
