// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import { Link as RouterLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Avatar, Typography } from '@mui/material';
// import { AccountCircle } from '@mui/icons-material';
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
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      VinFast Auto
    </Typography>
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Link to="/" style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/shop" style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>
        Shop
      </Link>
      <Link to="/about" style={{ margin: '0 15px', color: 'black', textDecoration: 'none' }}>
        About
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