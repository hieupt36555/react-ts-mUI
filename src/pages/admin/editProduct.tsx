import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem, LinearProgress } from '@mui/material';
import Product from 'src/types/IProducts';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import validator from 'validator';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditProduct: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<Product>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [product, setProduct] = useState<any>(null);
    const navigate = useNavigate();
    console.log(id);

    const onSubmit: SubmitHandler<Product> = async (data) => {
        try {
            setIsSubmitting(true);
            const response = await axios.put(`http://localhost:3000/products/${id}`, data);
            // if (response.status === 201) {
                Swal.fire({
                  title: "Thêm Sản Phẩm Thành Công!",
                  icon: "success",
                  timer: 1100,
                  showConfirmButton: false
                })
                navigate('/admin')
            //   }
        } catch (error) {
            Swal.fire({
                title: "Sửa Thất Bại!",
                text: `Lỗi: ${error}`,
                icon: "error",
              })
        } finally {
            setIsSubmitting(false);
        }

    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`); 
                setProduct(response.data); 
                setValue('name', response.data.name);
                setValue('name', response.data.name);
                setValue('price', response.data.price);
                setValue('image', response.data.image);
            } catch (error) {
                console.error('Lỗi khi lấy thông tin sản phẩm:', error);
                Swal.fire({
                    title: "Lỗi!",
                    text: `Lỗi: ${error}`,
                    icon: "error",
                })
            }
        };

        fetchProduct();
    }, []);

    if (!product) {
        return <Typography variant="body1"> <LinearProgress /></Typography>;
    }
    return (
        <Box sx={{
            maxWidth: 400, mx: 'auto', mt: 5, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography variant="h4" gutterBottom>
                Sửa Sản Phẩm
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    select
                    margin="normal"
                    label="Danh mục"
                    {...register('category', { required: 'Danh mục sản phẩm là bắt buộc' })}
                    defaultValue={product.category}
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
                    defaultValue={product.name}
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
                    defaultValue={product.price}
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
                    defaultValue={product.image}
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
                    defaultValue={product.desc}
                    error={!!errors.desc}
                    helperText={errors.desc?.message}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Sửa
                </Button>
                <Link to={"/admin"} >
                    <Button type="submit" variant="contained" color="warning" sx={{ mt: 2, marginLeft: '10px' }}>
                        Hủy
                    </Button>
                </Link>
            </form>
        </Box>
    );
};

export default EditProduct;
