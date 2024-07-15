import React from 'react';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';
import Product from 'src/types/IProducts';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

const AddProduct: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Product>();
  const navigate = useNavigate();


  const onSubmit: SubmitHandler<Product> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/products', data);
      if (response.status === 201) {
        Swal.fire({
          title: "Thêm Sản Phẩm Thành Công!",
          icon: "success",
          timer: 1100,
          showConfirmButton: false
        })
        navigate('/admin');
      }
    } catch (error) {
      Swal.fire({
        title: "Thêm Thất Bại!",
        text: `Lỗi: ${error}`,
        icon: "error",
      })
    }
  }
  return (
    <Box sx={{
      maxWidth: 400, mx: 'auto', mt: 5, display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Typography variant="h4" gutterBottom>
        Thêm Sản Phẩm
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
          fullWidth
          select
          margin="normal"
          label="Danh mục"
          {...register('category', { required: 'Danh mục sản phẩm là bắt buộc' })}
          error={!!errors.category}
          helperText={errors.category?.message}
        >
          <MenuItem value="Xe ĐIện">Xe Điện</MenuItem>
          <MenuItem value="Xe Xăng">Xe Xăng</MenuItem>
          <MenuItem value="Xe Máy Điện">Xe Máy Điện</MenuItem>
        </TextField>

        
        <TextField
          fullWidth
          margin="normal"
          label="Tên Sản Phẩm"
          {...register('name', { required: 'name Bắt Buộc Nhập' })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Giá"
          // type='number'
          {...register('price', {
            required: 'price Bắt Buộc Nhập',
            validate: (value) => validator.isNumeric(String(value)) || 'Giá phải là số',
          })}
          error={!!errors.price}
          helperText={errors.price?.message}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Ảnh"
          {...register('image', {
            required: 'image Bắt Buộc Nhập',
          })}
          error={!!errors.image}
          helperText={errors.image?.message}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mô Tả"
          {...register('desc', {
            required: 'Mô Tả Bắt Buộc Nhập',
          })}
          error={!!errors.desc}
          helperText={errors.desc?.message}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Thêm
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
