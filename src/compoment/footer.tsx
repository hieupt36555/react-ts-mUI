import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#000000', py: 3, boxShadow: '0px 2px 1px 2px rgba(0,0,0,0.2)'  }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Typography variant="h6">VinFast.</Typography>
          </Link>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
          Địa chỉ trụ sở chính: Số 7, đường Bằng Lăng 1, Khu đô thị Vinhomes Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt Nam
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Hotline: +123 456 789
            <br />
            Email: vinfastvn@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;