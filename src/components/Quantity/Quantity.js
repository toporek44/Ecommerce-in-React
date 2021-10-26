import React, { useState } from 'react';
import { Wrapper } from './Quantity.styles';

const Quantity = () => {
    const [quantity, setQuantity] = useState(0);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    return (
        <Wrapper>
            <button onClick={decreaseQuantity}>-</button>
            <p className="value">{quantity}</p>
            <button onClick={increaseQuantity}>+</button>
        </Wrapper>
    );
};

export default Quantity;
