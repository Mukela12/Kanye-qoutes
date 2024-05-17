import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Quote from './Quote';
import GitHubProfile from './GitHubProfile';
import Time from './Time';
import AudioControl from './AudioControl';

const CardContentComponent = () => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" p={1}>
        <Card sx={{
          maxWidth: '90%', // Use most of the screen width
          maxHeight: '90vh', // Prevent the card from being too tall
          overflow: 'auto', // Make contents scrollable
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          padding: '20px',
        }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom align="center" sx={{ mb: 2 }}>
              Kanye Quotes
            </Typography>
            <Quote />
            <Time />
            <AudioControl />
            <GitHubProfile />
          </CardContent>
        </Card>
      </Box>
    );
};

export default CardContentComponent;
