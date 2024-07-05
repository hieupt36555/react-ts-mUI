import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import { useHistory } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
//   const history = useHistory();

//   const handleGoHome = () => {
//     history.push('/');
//   };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Oops! Page not found.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Button variant="contained" color="primary" href='/' sx={{ mt: 2 }}>
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
