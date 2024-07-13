// src/components/AddProduct.tsx
import React, { useEffect, useState } from 'react';
import { Box,  Typography,  LinearProgress, Grid, IconButton, TextField, Button, AlertTitle, Alert } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Product from 'src/types/IProducts';
import axios from 'axios';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import NotFoundPage from '../notFound';

const Detail: React.FC = () => {

  const {id} = useParams<{id:string}>();
  const [product, setProduct] = useState<Product | null> (null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchProducts();
  },[id]);

 
  if (loading) {
    return <Typography variant="h4"><LinearProgress/> </Typography>;
  }

  if (error || !product) {
    return<> <Alert severity="error"><AlertTitle>Không Tìm Thấy ID</AlertTitle>{error}</Alert> <NotFoundPage /></> ;
  }
  
  return (
 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={product.image} alt="Product" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="subtitle1">{product.desc}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Price: $ {product.price}
            </Typography>
            <Typography variant="body2">Category: {product.category}</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Rating: 4.5/5
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <IconButton >
                  <RemoveCircle />
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  type="number"
                  variant="outlined"
                  InputProps={{ inputProps: { min: 1 }, sx: { width: 30,height: 30 ,textAlign: 'center' } }}
                  sx={{ width: 30, textAlign: 'center', '& input': { textAlign: 'center' } }}
                />
              </Grid>
              <Grid item>
                <IconButton size="small" >
                  <AddCircle />
                </IconButton>
              </Grid> 
            </Grid>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="warning" >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
