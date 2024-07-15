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
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import EditIcon from '@mui/icons-material/Edit';

export default function ListTable() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

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
        const confirmDelete = window.confirm('Bạn Có Chắc Chắn Muốn Xóa Sản Phẩm Này?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/products/${id}`);
                Swal.fire({
                    icon: "success",
                    title: "Đã Xóa Thành Công!",
                    showConfirmButton: false,
                    timer: 1100
                  });
            } catch (error) {
                console.error('Error deleting product:', error);
                Swal.fire({
                    title: "Xóa Thất Bại!",
                    text: "Lỗi: "+error,
                    icon: "error"
                });
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
                            <TableCell align="center"  >
                                <Button sx={{margin: '10px'}} variant="contained" color="success" startIcon={<EditIcon />} component={RouterLink} to={`/admin/edit/${product.id}`}  >
                                    Edit
                                </Button>
                                <Button sx={{margin: '10px'}} variant="outlined" color="error" startIcon={<GridDeleteIcon />} className='mg-left5' onClick={() => handleDeleteProduct(product.id)}   >
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