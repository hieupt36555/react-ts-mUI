import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import Banner from 'src/compoment/banner';
import ServiceSection from 'src/compoment/serviceSection';
import CarSection from 'src/compoment/carSection';
import MidBackGround from 'src/compoment/midBackGround';
import BottomBanner from 'src/compoment/bottomBanner';

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>

        <Banner/>
        <CarSection/>
        <MidBackGround/>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                      src="https://genk.mediacdn.vn/139269124445442048/2024/3/31/sac-xe-1a-08370628-1711879535019-17118795354261881811102.jpg" // Thay bằng link ảnh thiết bị sạc
                      alt="Thiết bị sạc di động"
                      style={{ maxHeight: '200px', maxWidth: '100%' }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" component="div">
                    Thiết bị sạc di động
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng của khách hàng một cách thuận tiện nhất.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Xem chi tiết
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
        <BottomBanner/>
        <ServiceSection/>
    </Box>
  );
};

export default HomePage;
