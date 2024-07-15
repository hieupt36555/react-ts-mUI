import { Box, Container, Typography } from "@mui/material";
import { Outlet, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Banner from "src/compoment/banner";
import Footer from "src/compoment/footer";
import Header from "src/compoment/header";
const drawerWidth = 240;


function ClientLayout() {

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ 
        flexGrow: 1, p: 3, 
        width: `calc(100% - ${drawerWidth}px)`
        }}>
        <Typography paragraph>
            <Header />
            <Container sx={{minHeight: 1000}} >
              <Box my={4}>
                <Outlet/>
              </Box>
            </Container>
        </Typography>
        <Footer />
      </Box>
      
    </Box>
  );



}

export default ClientLayout;