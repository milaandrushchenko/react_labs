import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';


export default function Product({ product }) {


    return (
        <Box>
            <ImageList sx={{ width: 700, height: '100%' }} cols={3} rowHeight={164}>
                {product.images.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Container sx={{}}>
                <Typography variant="h3">{product.title}</Typography>
                <Typography sx={{ width: 700 }}>{product.description}</Typography>
                <Typography>Rating</Typography>
                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly />
                <Typography>In stock: {product.stock}</Typography>
                <Typography sx={{ color: 'blue', fontSize: '40px' }}>${product.price}</Typography>
            </Container>
        </Box>
    );

}



