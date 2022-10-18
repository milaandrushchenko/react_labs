import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Product from './Product';

function Cart(props) {
    let initialQuantity = 0, initialTotalPrice = 0;
    props.products.forEach(function (product) {
        if (product.min) {
            initialQuantity += product.min;
            initialTotalPrice += product.min * product.price;
        }
    })
    const [quantity, setQuantity] = useState(initialQuantity);
    const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

    const changeQuantity = (number) => {
        setQuantity(quantity + number);
    }
    const changePrice = (price) => {
        setTotalPrice(totalPrice + price);
    }
    return (
        <div >
            <h1>{props.nameTask}</h1>
            <TableContainer className='tableClass' align="center" component={Paper}>
                <Table sx={{ maxWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.products.map((product, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <Product product={product} changeQuantity={changeQuantity} changePrice={changePrice} />
                                </TableRow>
                            )
                        })
                        }
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Totals</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="right">{quantity}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>{totalPrice}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Cart;