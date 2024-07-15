import React from 'react';
import { Box, Typography, Link, Grid, Divider, IconButton, Container } from '@mui/material';
import { Phone, Email, Facebook, YouTube } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    // <Box sx={{ bgcolor: '#ffffff', color: '#000000', py: 3, boxShadow: '0px 2px 1px 2px rgba(0,0,0,0.2)' }}>
    //   <Grid container justifyContent="center">
    //     <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //       <Link component={RouterLink} to="/" color="inherit" underline="none">
    //         <Typography variant="h6">VinFast Auto.</Typography>
    //       </Link>
    //       <Typography variant="body2" sx={{ textAlign: 'center' }}>
    //         Địa chỉ trụ sở chính: Số 7, đường Bằng Lăng 1, Khu đô thị Vinhomes Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt Nam
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //       <Typography variant="h6">Contact Us</Typography>
    //       <Typography variant="body2" sx={{ textAlign: 'center' }}>
    //         Hotline: +123 456 789
    //         <br />
    //         Email: vinfastvn@gmail.com
    //       </Typography>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        p: 2, // Bạn có thể điều chỉnh khoảng cách padding ở đây
        mt: 'auto',
        position: 'relative',
        bottom: 0,
      }}
    >
      <Container maxWidth={false} sx={{ px: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">VINFAST</Typography>
            <Typography variant="body2">
              Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast
            </Typography>
            <Typography variant="body2">
              MST/MSDN: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 01/10/2019
              và các lần thay đổi tiếp theo.
            </Typography>
            <Typography variant="body2">
              Địa chỉ trụ sở chính: Số 7, đường Bằng Lăng 1, Khu đô thị Vinhomes Riverside,
              Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt Nam
            </Typography>
            <Typography variant="body2">Hệ sinh thái</Typography>
            <Typography variant="body2">Vincom</Typography>
            <Typography variant="body2">Vinhome</Typography>
            <Typography variant="body2">Vinepearl</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">HOTLINE</Typography>
            <Typography variant="body2">
              <Phone /> 1900 23 23 89
            </Typography>
            <Typography variant="body2">
              <Email /> support.vn@vinfastauto.com
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Kết nối với VinFast
            </Typography>
            <IconButton aria-label="facebook" href="https://facebook.com">
              <Facebook />
            </IconButton>
            <IconButton aria-label="youtube" href="https://youtube.com">
              <YouTube />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">THÔNG TIN</Typography>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Về VinFast
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Về Vingroup
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Tin tức
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Ưu đãi
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Showroom & Đại lý
            </Link>
            <Link href="#" variant="body2" display="block" gutterBottom>
              Điều khoản chính sách
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © VinFast. All rights reserved. © Copyright 2024
        </Typography>
      </Container>
    </Box>

  );
};

export default Footer;