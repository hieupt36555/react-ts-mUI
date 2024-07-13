import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import IUser from 'src/types/IUser';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import validator from 'validator';


const RegisterPage: React.FC = () => {
    const nav = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IUser>();
    const password = watch('password');

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

    //call api
    const onSubmit: SubmitHandler<IUser> = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/register', data);
            if (response.status === 201) {
                Swal.fire({
                    title: "Đăng Kí Thành Công!",
                    icon: "success",
                    timer: 3100,
                    showConfirmButton: false
                })
                nav('/login');
            }
        } catch (error) {
            Swal.fire({
                title: "Đăng Kí Thất Bại!",
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
                Đăng Ký
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Username"
                    {...register('username', { required: 'Username Bắt Buộc Nhập' })}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />
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
                <TextField
                    fullWidth
                    margin="normal"
                    label="Confirm Password"
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Confirm password Bắt Buộc Nhập',
                        validate: value => value === password || 'Password Không Khớp',
                    })}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Đăng Ký
                </Button>
            </form>
        </Box>
    );
};

export default RegisterPage;
