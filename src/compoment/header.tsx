
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function Header() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    Swal.fire({
      title: "Đăng Xuất Thành Công!",
      icon: "success",
      timer: 1100,
      showConfirmButton: false
    })
  }
  return (
  <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#000' }}>
  <Toolbar>
    <Typography component={Link} to={'/'} variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
      VinFast Auto
    </Typography>
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
    <Link to="/about" style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>
        Giới Thiệu
      </Link>
      <Link to="/shop" style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>
        Sản Phẩm
      </Link>
      <Link to="/map" style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>
        Trạm Sạc
      </Link>
      <Link to="/warranty " style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>
        Dịch Vụ Bảo Hành
      </Link>
    </Box>
    <IconButton color="inherit" onClick={handleMenuClick}>
      <AccountCircle />
    </IconButton>
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
    <MenuItem component={Link} to="/admin" onClick={handleClose}>Admin Dashboard</MenuItem>
      <MenuItem component={Link} to="/login" onClick={handleClose}>Đăng Nhập</MenuItem>
      <MenuItem component={Link} to="/register" onClick={handleClose}>Đăng Ký</MenuItem>
      <MenuItem component={Link} to="/" onClick={handleLogout}>Đăng Xuất</MenuItem>
    </Menu>
  </Toolbar>
</AppBar>
  );
}
export default Header;