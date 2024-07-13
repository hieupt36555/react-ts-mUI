// import { Button, Container, Stack, Typography } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ValidationErrors } from "final-form";
// import { Field, Form } from "react-final-form";
// import { InputText } from "src/compoment/element/inputText";
// import isEmail from "validator/lib/isEmail";


// type RegisterFormParams = {
//   username: string;
//   email: string;
//   password: string;
// };

// const TestRe = () => {
//   const nav = useNavigate();
//   const validate = (values: RegisterFormParams) => {
//     const { username, email, password } = values;
//     const errors: ValidationErrors = {};
//     if (!username) errors.username = "Can nhap username vao";
//     if (!email) errors.email = "Can nhap email vao";
//     if (email && !isEmail(email)) errors.email = "Chua dung dinh dang email";
//     if (!password) errors.password = "Can nhap password vao";
//     if (password && password.length < 6)
//       errors.password = `Can nhap password toi thieu 6 ky tu`;
//     return errors;
//   };

//   const onSubmit = async (data: RegisterFormParams) => {
//     try {
//       await axios.post("http://localhost:3000/register", data);
//       nav("/login");
//     } catch (error) {}
//   };

//   return (
//     <Container>
//       <Typography variant="h2" textAlign={"center"} mb={2}>
//         Register
//       </Typography>
//       <Form
//         onSubmit={onSubmit}
//         validate={validate}
//         render={({ values }) => {
//           return (
//             <Stack gap={2}>
//               <Field
//                 name="username"
//                 render={({ input, meta }) => (
//                   <InputText
//                     input={input}
//                     label={"Username"}
//                     messageError={meta.touched && meta.error}
//                   />
//                 )}
//               />
//               <Field
//                 name="email"
//                 render={({ input, meta }) => (
//                   <InputText
//                     input={input}
//                     label={"Email"}
//                     messageError={meta.touched && meta.error}
//                   />
//                 )}
//               />
//               <Field
//                 name="password"
//                 render={({ input, meta }) => (
//                   <InputText
//                     input={input}
//                     label={"Password"}
//                     messageError={meta.touched && meta.error}
//                     type="password"
//                   />
//                 )}
//               />
//               <Button variant="contained" onClick={() => onSubmit(values)}>
//                 Submit
//               </Button>
//             </Stack>
//           );
//         }}
//       />
//     </Container>
//   );
// };

// export default TestRe;
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import validator from 'validator';
import axios from 'axios';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const TestRe: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const password = watch('password');

  const onSubmit = async (data: FormData) => {
    try {
        // {username: data.username ,email: data.email, password: data.password}
        const response = await axios.post('http://localhost:3000/register', data);
        if (response.status === 201) {
           
            alert("thanh cong");
        }
    } catch (error) {
        
    }
  };

  const validateEmail = (email: string) => {
    if (!validator.isEmail(email)) {
      return 'Invalid email';
    }
    return true;
  };
  const validatePassword = (password: string) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return true;
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Đăng Ký
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          {...register('username', { required: 'Username is required' })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          {...register('email', {
            required: 'Email is required',
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
            required: 'Password is required',
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
            required: 'Confirm password is required',
            validate: value => value === password || 'Passwords do not match',
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

export default TestRe;
