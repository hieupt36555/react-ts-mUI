import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/system';

const services = [
    {
        title: 'Bảo dưỡng định kỳ',
        description: 'Trong quá trình vận hành, nhiều chi tiết trên xe bị mài mòn hoặc hư hỏng theo thời gian sử dụng. Điều này xảy ra với bất kỳ cơ cấu máy mó...',
        image: 'https://images2.thanhnien.vn/528068263637045248/2023/3/13/photo-1678681044288-1678681044557703167486.jpg',
        link: '#'
    },
    {
        title: 'Dịch vụ sửa chữa',
        description: 'Toyota cũng cung cấp dịch vụ sửa chữa đối với những hư hỏng do va chạm mà chiếc xe của bạn gặp phải trong quá trình sử dụng với kỹ thuật...',
        image: 'https://ircdn.vingroup.net/storage/Uploads/0_Tintuchoatdong/2020/Mar/XDV2.jpg',
        link: '#'
    },
    {
        title: 'Dịch vụ chăm sóc làm đẹp xe',
        description: 'Chăm sóc và làm đẹp tập trung vào thẩm mỹ, làm đẹp nội ngoại thất xe, mang lại các trải nghiệm cao cấp và sang trọng cho người dùng.',
        image: 'https://vcdn1-vnexpress.vnecdn.net/2020/06/24/v19788158944517747541591848277-8403-4790-1592997073.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=DOv_cQhol-rm0pbUYh4S2w',
        link: '#'
    }
];

const CustomButton = styled(Button)({
    color: '#555555',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
    }
});

const ServiceCard = styled(Card)({
    boxShadow: 'none'
});

const ServiceSection: React.FC = () => {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', color: '#000' }}>
                Dịch Vụ
            </Typography>
            <Box sx={{ borderBottom: '1px solid #555555', marginBottom: '10px' }}>
                
            </Box>
            <Grid container spacing={2}>
                {services.map((service, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <ServiceCard>
                            <CardMedia
                                component="img"
                                height="140"
                                image={service.image}
                                alt={service.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {service.description}
                                </Typography>
                                <CustomButton href={service.link}>Xem Thêm</CustomButton>
                            </CardContent>
                        </ServiceCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServiceSection;
