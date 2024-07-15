import React from 'react';
import { Box, Typography, Button, TextField, FormControlLabel, Checkbox, Grid } from '@mui/material';
import IUser from 'src/types/IUser';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}
                >
                    <img src="https://cafefcdn.com/203337114487263232/2024/1/3/anh-1-09245252-1704254085272-17042540857911332511780.png" alt="Description" style={{ maxWidth: '100%', height: 'auto' , objectFit: 'cover' }} />
                </Box>
            </Grid>
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
                    <Typography variant="body2" color="">
                        Một mật khẩu bao gồm:
                        <ul>
                            <li>Ít nhất 6 ký tự</li>
                            <li>Chữ hoa & chữ thường</li>
                            <li>Ít nhất 1 số</li>
                        </ul>
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ từ VinFast"
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Đăng Ký
                    </Button>
                    <Link to={'/'} >
                        <Button type="submit" variant="contained" color="warning" sx={{ mt: 2, marginLeft: '10px' }}>
                            Hủy
                        </Button></Link>
                </form>
            </Box>

        </Grid>
    );
};

export default RegisterPage;
