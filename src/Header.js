import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
  const dispatch = useDispatch();

  const logoutOfAppHandler = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption
          id="network__icon"
          title="My Network"
          Icon={SupervisorAccountIcon}
        />

        <HeaderOption
          id="jobs__icon"
          Icon={BusinessCenterIcon}
          title="Jobs"
        />
        <HeaderOption Icon={ChatIcon} title="Messaging" />

        <HeaderOption
          Icon={NotificationsIcon}
          title="Notifications"
        />
        <HeaderOption avatar={true} title="Me" />
        <HeaderOption
          onClick={logoutOfAppHandler}
          Icon={LogoutIcon}
          title="Logout"
        />
      </div>
    </div>
  );
}

export default Header;
