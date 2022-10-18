import TableCell from '@mui/material/TableCell';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Product(props) {
    const { name, price, min = 0, max } = props.product;
    const changeQuantity = props.changeQuantity;
    const changePrice = props.changePrice;
    const [count, setCount] = useState(min);

    const increment = () => {
        if (max > count || max === undefined) {
            setCount(count + 1)
            changeQuantity(1)
            changePrice(price)
        }
    }
    const decrement = () => {
        if (min < count || min === undefined) {
            setCount(count - 1)
            changeQuantity(-1)
            changePrice(-price)
        }
    }
    return (
        <>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right" width="200px">
                <Button variant="outlined" sx={{ minWidth: 0 }} onClick={increment}>+</Button> {count}
                <Button variant="outlined" sx={{ minWidth: 0 }} onClick={decrement}>-</Button>
            </TableCell>
            <TableCell align="right">{price * count}</TableCell>
        </>
    )
}

export default Product;