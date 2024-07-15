import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const cars = [
    {
        name: 'VF8',
        description: 'Giá Từ 1.009.000.000 VNĐ',
        image: 'https://vinfastauto.us/themes/custom/vinfast_v2/images/v3/homepage/VF8-car.webp',
        button1: 'Đặt Cọc Ngay',
        button2: 'Khám Phá'
    },
    {
        name: 'VF9',
        description: 'Giá Từ 1.209.000.000 VNĐ',
        image: 'https://vinfastauto.us/themes/custom/vinfast_v2/images/v3/homepage/VF9-car.webp',
        button1: 'Đặt Cọc Ngay',
        button2: 'Khám Phá'
    },
    {
        name: 'VF7',
        description: 'Giá Từ 999.000.000 VNĐ',
        image: 'https://vinfastauto.us/themes/custom/vinfast_v2/images/v3/homepage/VF7-car.webp',
        button1: 'Đặt Cọc Ngay',
        button2: 'Khám Phá'
    }
];

const CustomButton = styled(Button)({
    textTransform: 'none',
    margin: '5px',
});

const CarSection: React.FC = () => {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', textAlign: 'center' }}>
                Khám phá đại gia đình VinFast
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'center' }}>
                Ngôn ngữ thiết kế của VinFast kết hợp những đường cong thể thao, nét sang trọng và
                sự hiện diện đáng gờm, đồng thời tối ưu hóa hiệu suất, chức năng và sự đơn giản thanh lịch.
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: '20px', marginBottom: '40px' }} >
                {cars.map((car, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={car.image}
                                alt={car.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {car.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {car.description}
                                </Typography>
                                {car.button1 && <CustomButton variant="contained" color="primary">{car.button1}</CustomButton>}
                                <CustomButton variant="outlined">{car.button2}</CustomButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CarSection;
