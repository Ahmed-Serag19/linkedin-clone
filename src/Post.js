import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import InputOption from './InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import LoopIcon from '@mui/icons-material/Loop';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(
  ({ name, description, message, photoUrl }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}> {name[0]}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="gray"
          />
          <InputOption
            Icon={ChatOutlinedIcon}
            title="Comment"
            color="gray"
          />
          <InputOption Icon={LoopIcon} title="Share" color="gray" />
          <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
