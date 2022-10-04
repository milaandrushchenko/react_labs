import { useState } from 'react';

const ProductColor = () => {
    const colors = ["red", "green", "magenta", "blue", "grey", "brown", "black"];

    const [color, setColor] = useState(colors[0]);

    const handleChange = event => {
        console.log(event.target.value);
        setColor(event.target.value);
    };

    return (
        <div className="block">
            <div className='block_row'>
                <h1>I am a <span style={{ color: color }}>{color}</span> Product</h1>
                <select value={color} onChange={handleChange}>
                    {colors.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProductColor;
