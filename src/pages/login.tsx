import React from 'react';
import { Box, Typography, Button, TextField, Alert } from '@mui/material';
import IUser from 'src/types/IUser';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import validator from 'validator';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<IUser>();
    const location = useLocation();
    const message = location.state?.message;



    //validate
    const validateEmail = (email: string) => {
        if (!validator.isEmail(email)) {
            return 'Không Đúng Định Dạng Email';
        }
        return true;
    };
    const validatePassword = (password: string) => {
        if (password.length < 6) {
            return 'Password Phải Lớn Hơn 6 Kí Tự';
        }
        return true;
    };


    const onSubmit: SubmitHandler<IUser> = async (data) => {

        try {
            const response = await axios.post('http://localhost:3000/login', data);
            if (response.status === 200) {
                Swal.fire({
                    title: "Đăng Nhập Thành Công!",
                    icon: "success",
                    timer: 3100,
                    showConfirmButton: false
                });
                const token = response.data.accessToken;
                localStorage.setItem('token', token);
                nav('/');;
            }

        } catch (error) {
            Swal.fire({
                title: "Đăng Nhập Thất Bại!",
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
            {message && (
                <Alert severity="warning" sx={{ marginBottom: 2 }}>
                    {message}
                </Alert>
            )}
            <Typography variant="h4" gutterBottom>
                Đăng Nhập
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    {...register('email', {
                        required: 'Email Bắt Buộc Nhập',
                        validate: validateEmail,
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    {...register('password', {
                        required: 'Password Bắt Buộc Nhập',
                        validate: validatePassword,
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Typography sx={{ mt: 2 }}>
                    Bạn chưa có tài khoản?{' '}
                    <Link to="/register" style={{ textDecoration: 'none', color: 'blue' }}>
                        Đăng ký ngay
                    </Link>
                </Typography>
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Đăng Nhập
                </Button>
            </form>
        </Box>
    );
};

export default LoginPage;
