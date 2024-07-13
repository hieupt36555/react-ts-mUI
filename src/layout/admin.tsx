import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();


  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: 'success.main', 
            color: 'white', 
          },
        }}
      >
        <Box sx={{ padding: 2, textAlign: 'center' }}>
          <Typography variant="h6" component="div">
            VinFast Auto
          </Typography>
        </Box>
        <List>
          <ListItem button onClick={() => navigate('/admin')}>
            <ListItemIcon sx={{ color: 'white' }}><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button onClick={() => navigate('/admin/users')}>
            <ListItemIcon sx={{ color: 'white' }}><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Users" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button onClick={() => navigate('/admin/settings')}>
            <ListItemIcon sx={{ color: 'white' }}><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button onClick={() => navigate('/')}>
            <ListItemIcon sx={{ color: 'white' }}><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button onClick={() => { /* Logout logic */ }}>
            <ListItemIcon sx={{ color: 'white' }}><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: 'white' }} />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" component="h4" gutterBottom>
           Admin Dashboard
        </Typography>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Outlet/>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminPage;
