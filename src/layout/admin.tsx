import React from 'react';
import {
  Box,
  Paper
} from '@mui/material';
import { Outlet} from 'react-router-dom';
import AdminHeader from 'src/compoment/admin/header';
import SideBar from 'src/compoment/admin/sideBar';

const AdminPage: React.FC = () => {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AdminHeader  />
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Outlet/>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminPage;
