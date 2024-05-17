import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Avatar, Typography, Link } from '@mui/material';

const GitHubProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('https://api.github.com/users/Mukela12');
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={5}>
      <Avatar src={profile.avatar_url} alt="GitHub Profile" sx={{ width: 56, height: 56, mr: 2 }} />
      <Box>
        <Typography variant="h6">{profile.login}</Typography>
        <Link href="https://github.com/Mukela12" target="_blank" rel="noopener" color="inherit">
          Check out my GitHub
        </Link>
      </Box>
    </Box>
  );
};

export default GitHubProfile;
