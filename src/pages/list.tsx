import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { GridDeleteIcon, GridSearchIcon } from '@mui/x-data-grid';
import Product from '../types/IProducts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'
import { LinearProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


export default function ListTable() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <LinearProgress />;
    if (error) return <p>{error}</p>;

    const handleDeleteProduct = async (id: string) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this product?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/products/${id}`);
                console.log('Product deleted successfully');
                // fetchProducts(); 
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }

    };


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Desc</TableCell>
                        <TableCell align="center">Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(product => (
                        <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center"> <img src={product.image} alt="" className='img-url' /></TableCell>
                            <TableCell component="th" scope="row">
                                {product.category}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {product.name}
                            </TableCell>
                            <TableCell align="center" > {product.price}$</TableCell>
                            <TableCell align="center"> {product.desc}</TableCell>
                            <TableCell align="center" >
                                <Button variant="contained" color="success" startIcon={<GridSearchIcon />} component={RouterLink} to={`/product/${product.id}`}  >
                                    Profile
                                </Button>
                                <Button variant="outlined" color="error" startIcon={<GridDeleteIcon />} className='mg-left5' onClick={() => handleDeleteProduct(product.id)}   >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    );
}