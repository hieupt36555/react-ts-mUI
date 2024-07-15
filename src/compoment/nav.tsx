import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';

const drawerWidth = 240;


function NavBar() {


    return (
        <Drawer
            variant="permanent"

            sx={{
                width: drawerWidth, 
                flexShrink: 0, 
                '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }, 
                
            }}
        >
            <Toolbar>
                <Box
                    component="img"
                    src="https://storage.googleapis.com/prod-storage-vinfast-us/statics/field/image/press-kit/2022/06-01/Vinfast-logo-new_NO_Tagline%20-2D-Horizontal%20black.png" // Cập nhật đường dẫn tới tệp logo của bạn
                    alt="Logo"
                    sx={{ width: drawerWidth - 100, m: 1 }} 
                />
            </Toolbar>
            <List>
                <ListItemButton  >
                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                    <ListItemText  >Home</ListItemText>
                </ListItemButton >

                <ListItem button  >
                    <ListItemIcon> <AddIcon /></ListItemIcon>
                    <ListItemText>Create</ListItemText>
                </ListItem>

                <ListItem button  >
                    <ListItemIcon> <PersonIcon /></ListItemIcon>
                    <ListItemText>User</ListItemText>
                </ListItem>

                <ListItem button  >
                    <ListItemIcon> <InfoIcon /></ListItemIcon>
                    <ListItemText>About</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );

}
export default NavBar;