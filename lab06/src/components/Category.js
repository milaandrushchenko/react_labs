import * as React from 'react';
import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Category({ category }) {


    return (
        <Card sx={{ minWidth: 275, m: '20px' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {category}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><NavLink style={{ textDecoration: 'none' }} to={`${category}/products`}>Go To Products</NavLink></Button>
            </CardActions>
        </Card>
    );

}



