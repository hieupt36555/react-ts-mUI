import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


function Header() {


  return (
    <AppBar  color="default" sx={{ bgcolor: '#ffffff', color: '#000000' }} >
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          VinFast
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6" component="div">
             <Box>
           <Button color="inherit" component={RouterLink} to="/">
             Home
           </Button>
           <Button color="inherit" component={RouterLink} to="/list">
             List
           </Button>
           <Button color="inherit" component={RouterLink} to="/contact">
             Contact
           </Button>
           <Button color="inherit" component={RouterLink} to="/add">
             Create New
           </Button>
         </Box>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <Typography variant="subtitle1" component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
          Guest
        </Typography>
        <Avatar alt="Username" src="/avatar.jpg" sx={{ marginLeft: '10px' }} />
      </Box>
    </Toolbar>
  </AppBar>
  );
}
export default Header;