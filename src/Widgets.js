import React from 'react';
import { Info } from '@mui/icons-material';
import './Widgets.css';
import { Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Widgets() {
  const AddToFeed = (name, subtitle, src) => (
    <div className="widgets__article">
      <div className="widgets__article__left">
        <Avatar src={src} />
      </div>
      <div className="widgets__article__right">
        <h4>{name}</h4>
        <p>{subtitle}</p>
        <div>
          <button className="follow__button">
            {<AddIcon />} Follow
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Add to your feed</h2>
        <Info />
      </div>
      {AddToFeed(
        'Belal Mahmoud',
        'Senior Accountant | Dota noob',
        'https://i.imgur.com/ByQUUjv.jpg'
      )}
      {AddToFeed(
        'Mohamed Hosny',
        'Senior Booking Manager | AFK in life',
        'https://i.imgur.com/DUBBLtb.jpg'
      )}
      <div className="widgets__footer">
        <div className="inner__footer">
          <h4>View all recommendations </h4>
          <ArrowRightAltIcon className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
