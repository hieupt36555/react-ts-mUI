import React, { useEffect, useState } from 'react';
import { AlertTitle, Box, Card, CardContent, CardMedia, Grid, LinearProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Product from 'src/types/IProducts';
import axiosInstance from 'src/config/axios';
import { Button } from '@mui/base';
import FilterBar from 'src/compoment/filterBar';
import ProductFilter from 'src/compoment/filterBar';

const CarList: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('/products');
                setProducts(response.data);
            } catch (err) {
                setError('Không Thể Kết Nối Với DataBase. Mã Lỗi: ' + err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <LinearProgress />;
    if (error) return <Alert severity="error"><AlertTitle>Lỗi Kết Nối!!</AlertTitle>{error}</Alert>;

    return (
        <>
            <ProductFilter/>
            <Grid container spacing={2} style={{ marginTop: '50px' }} >
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <Card sx={{ maxWidth: 345, position: 'relative' }}>
                            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.category}
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    Giá từ {product.price} VNĐ
                                </Typography>
                                <Button style={{ border: 'none' }} >Hiển thị thêm</Button>
                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid></>
    );
};

export default CarList;