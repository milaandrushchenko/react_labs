import React, { useState } from 'react';
import Button from '@mui/material/Button';
function MyCounter(props) {
    let current = 0;
    if (props.initial !== undefined) current = props.initial;
    const [count, setCount] = useState(current);

    const increment = () => {
        if (props.max > count || props.max === undefined) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (props.min < count || props.min === undefined) {
            setCount(count - 1)
        }
    }
    const reset = () => {
        setCount(current)
    }
    return (
        <div className='myCounter'>
            <h1>{props.nameTask}</h1>
            <span>Поточний рахунок : {count} </span>
            <Button variant="outlined" onClick={increment}>+</Button>
            <Button variant="outlined" onClick={decrement}>-</Button>
            <Button variant="outlined" onClick={reset}>reset</Button>
        </div>
    );
}

export default MyCounter;