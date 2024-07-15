import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, TextField, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ProductFilter: React.FC = () => {
    return (
        <Grid container spacing={1} alignItems="center" style={{ marginTop: '50px' }} >
        <Grid item xs={12} sm={3}>
            <FormControl fullWidth size="small">
                <InputLabel id="sort-by-label">Sắp xếp theo</InputLabel>
                <Select
                    labelId="sort-by-label"
                    id="sort-by-select"
                    label="Sắp xếp theo"
                    fullWidth
                >
                    <MenuItem value="price_asc">Giá: Thấp đến cao</MenuItem>
                    <MenuItem value="price_desc">Giá: Cao đến thấp</MenuItem>
                </Select>
            </FormControl>
        </Grid>

        <Grid item xs={12} sm={5}>
            <TextField
                id="search-input"
                label="Tìm kiếm sản phẩm"
                variant="outlined"
                fullWidth
                size="small"
            />
        </Grid>
        <Grid item xs={6} sm={2}>
            <IconButton color="primary" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Grid>
    </Grid>
    );
};

export default ProductFilter;
