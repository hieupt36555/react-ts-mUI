// src/components/AddProduct.tsx
import React, { useEffect, useState } from 'react';
import { AlertTitle, Box, Card, CardContent, CardMedia, Grid, LinearProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Product from 'src/types/IProducts';
import axiosInstance from 'src/config/axios';



const ProductsCard: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('/products');
                setProducts(response.data);
            } catch (err) {
                setError('Không Thể Kết Nối Với DataBase. Mã Lỗi: '+err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <LinearProgress />;
    if (error) return  <Alert severity="error"><AlertTitle>Lỗi Kết Nối!!</AlertTitle>{error}</Alert>;


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="150"
                                image={product.image}
                                alt={product.name}
                                sx={{ objectFit: "contain" }}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="h6">{product.price}$</Typography>
                                <Typography>{product.desc}</Typography>
                               
                            </CardContent>
                            
                                    
                                
                        </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductsCard;
