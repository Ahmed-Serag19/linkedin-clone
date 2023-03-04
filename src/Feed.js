import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Post
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            Icon={ImageIcon}
            title="Photo"
            color="#70B5F9"
          />
          <InputOption
            Icon={SmartDisplayIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOption
            Icon={CalendarMonthIcon}
            title="Event"
            color="#C0C0BCD"
          />
          <InputOption
            Icon={ArticleIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
