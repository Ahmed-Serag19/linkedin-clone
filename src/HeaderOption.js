import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';

function HeaderOption({ avatar, title, Icon, onClick, id }) {
  const user = useSelector(selectUser);

  return (
    <div id={id} onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__img"
          src={user ? user.photoUrl : ''}
        >
          {user ? user.email[0] : ''}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
