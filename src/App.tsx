
import './App.css'
import { Box, Container, Typography } from "@mui/material";
import ListTable from "./pages/list";
import Header from "./compoment/header";
import Footer from './compoment/footer';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import ProductsCard from './pages/client/productsCard';
import Detail from './pages/client/detail';
import AddProduct from './pages/addProduct';
import NotFoundPage from './pages/notFound';
const drawerWidth = 240;


function App() {
  let element = useRoutes([
      {
        path: "/",
        element: <ProductsCard />,
      },
      {
        path: "/product/:id",
        element: <Detail />
      },
      {
        path: "/list",
        element: <ListTable />
      },
      {
        path: "/add",
        element: <AddProduct />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }

  ])
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
                {element}
              </Box>
            </Container>
            <Footer />
        </Typography>
      </Box>
    </Box>
  );



}

export default App
