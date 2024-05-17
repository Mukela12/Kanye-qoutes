import React from 'react';
import CardContentComponent from './components/CardContent';
import './App.css';

function App() {
  return (
    <>
      <video id="background-video" autoPlay loop muted>
        <source src="https://res.cloudinary.com/dgdbxflan/video/upload/v1715922592/4782594-uhd_3840_2160_30fps_sz3bbr.mp4" type="video/mp4" />
      </video>
      <CardContentComponent />
    </>
  );
}

export default App;
