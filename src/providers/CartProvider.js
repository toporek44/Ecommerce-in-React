import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const totalFromStorage = Number(localStorage.getItem('total')) || 0;
    const [cart, setCart] = useState(cartFromLocalStorage);
    const [total, setTotal] = useState(totalFromStorage);
    const [isProceeded, setIsProceeded] = useState(false);
    const [isCheckout, setCheckout] = useState(false);

    return (
        <CartContext.Provider
            value={{
                setCart,
                cart,
                total,
                setTotal,
                cartFromLocalStorage,
                totalFromStorage,
                isProceeded,
                setIsProceeded,
                isCheckout,
                setCheckout,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
