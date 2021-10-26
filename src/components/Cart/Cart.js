import React, { useContext, useEffect } from 'react';
import { TableRow } from 'components/CartItem/CartItem.style';
import CartItem from 'components/CartItem/CartItem';
import { CartContext } from 'providers/CartProvider';
import { Button } from 'components/Button/Button';
import { Wrapper, CartItems, EmptyInfo, CheckoutContainer } from './Cart.styles';

const Cart = ({ handleNextStep }) => {
    const { total, cart, setTotal, setCart, setCheckout } = useContext(CartContext);

    useEffect(() => {
        const totalValue = cart.reduce((acc, item) => (cart.length ? acc + Number(item.price.slice(1, item.price.length)) * item.quantity : 0.0), 0);
        setTotal(totalValue);
    }, [cart, setCart, setTotal]);

    const handleCheckout = () => {
        handleNextStep();
        setCheckout(true);
    };

    return (
        <Wrapper>
            {cart.length > 0 ? (
                <CartItems>
                    <TableRow secondary>
                        <p className="label">Product</p>
                        <p className="label">Price</p>
                        <p className="label">Qty</p>
                        <p className="label">Total</p>
                        <p className="label"></p>
                    </TableRow>

                    {cart.map(({ id, image, product_name, price, quantity, productTotal }) => (
                        <CartItem key={id} image={image} product_name={product_name} price={price} id={id} quantity={quantity} productTotal={productTotal} />
                    ))}
                </CartItems>
            ) : (
                <EmptyInfo>Your cart is empty.</EmptyInfo>
            )}
            <CheckoutContainer>
                <p className="checkout-title">Cart Total</p>
                <p className="total-value">${total.toFixed(2)}</p>
                <p className="shipping-info">Shipping & taxes calculated at checkout</p>

                <Button secondary onClick={cart.length ? handleCheckout : null}>
                    Checkout
                </Button>
            </CheckoutContainer>
        </Wrapper>
    );
};

export default Cart;
