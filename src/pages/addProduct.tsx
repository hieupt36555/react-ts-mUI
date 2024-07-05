// src/components/AddProduct.tsx
import React from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AddProduct: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Create New
      </Typography>
      <TextField required id="name" label="Name" variant="outlined" />
      <TextField required id="price" label="Price" variant="outlined" type="number" />
      <TextField required id="name" label="Image" variant="outlined" />
      <TextField required id="desc" label="Description" variant="outlined" multiline rows={2} />
      <Stack  >
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
        <Button variant="contained" color="warning" sx={{ mt: 2 }} component={RouterLink} to="/" >
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default AddProduct;
