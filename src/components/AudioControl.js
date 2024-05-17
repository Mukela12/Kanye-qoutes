import React, { useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';

const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('https://res.cloudinary.com/dgdbxflan/video/upload/v1715926219/KANYE_WEST_-_REAL_FRIENDS_INSTRUMENTAL_320_x0kxe3.mp3'));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <IconButton onClick={togglePlayPause} sx={{ color: 'white', position: 'absolute', top: '20px', right: '20px' }}>
      {isPlaying ? <Pause /> : <PlayArrow />}
    </IconButton>
  );
};

export default AudioControl;
