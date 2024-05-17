import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Typography variant="h5" align="center" mt={3}>
      Local Time: {time.toLocaleTimeString()}
    </Typography>
  );
};

export default Time;
