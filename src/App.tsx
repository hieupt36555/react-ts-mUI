
import './App.css'
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import NotFoundPage from './pages/notFound';
import ClientLayout from './layout/client';
import ProductsCard from './pages/client/productsCard';
import AdminPage from './layout/admin';
import ListTable from './pages/list';
import Detail from './pages/client/detail';
import PrivateRoute from './compoment/privateRoter';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import TestRe from './pages/registerTest';

// const token = localStorage.getItem('token');
// const isAdmin = token ? JSON.parse(atob(token.split('.')[1])).role === 'admin' : false;

let element = [
  {
    path: "",
    element: <ClientLayout />,
    children: [
      {
        path: "",
        element: <ProductsCard />
      },
      {
        path: "product/:id",
        element: <Detail />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "test",
        element: <TestRe />
      },
      {
        path: "register",
        element: <RegisterPage />
      }

    ]
  },
  {
    path: "/admin",
    element: (<PrivateRoute><AdminPage /></PrivateRoute>),
    children: [
      {
        path: "",
        element: <ListTable />
      }
    ]
    
  },
  {
    path: "*",
    element: <NotFoundPage />
  }

]

function App() {
  const routes = useRoutes(element);

  return (
    <main>{routes}</main>
    
  );



}

export default App
