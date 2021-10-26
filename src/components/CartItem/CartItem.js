import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, ProductTable, TableRow } from 'components/CartItem/CartItem.style';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import { Button } from 'components/Button/Button';
import { useCart } from 'hooks/useCart';
import { CartContext } from 'providers/CartProvider';

const CartItem = ({ id, image, product_name, price, quantity, productTotal }) => {
    const [quantityValue, setQuantity] = useState(quantity || 1);
    const { setTotal } = useContext(CartContext);
    const productPrice = Number(price.slice(1, price.length));
    const [productTotalValue, setProductTotal] = useState(productPrice);
    const { handleRemoveProduct, cart, setCart } = useCart();

    useEffect(() => {
        setProductTotal(productPrice * quantityValue);
        const newCart = cart.map((product) => (product.id === id ? { ...product, productTotal: productTotalValue, quantity: quantityValue } : { ...product }));
        setCart(newCart);
    }, [quantityValue, productTotalValue]);

    const decreaseQuantity = () => {
        if (quantityValue > 1) {
            setQuantity((prev) => prev - 1);
            setTotal((prev) => prev - productPrice);
        }
    };

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
        setTotal((prev) => prev + productPrice);
    };

    return (
        <ProductTable>
            <TableRow>
                <Link className="image-container" to={`/product/${id}`}>
                    <img src={image} alt={product_name} />
                    <p className="product-name">{product_name}</p>
                </Link>
                <p className="price">{price}</p>
                <Wrapper>
                    <button onClick={decreaseQuantity}>-</button>
                    <p className="value">{quantity}</p>
                    <button onClick={increaseQuantity}>+</button>
                </Wrapper>
                <p className="price">${productTotal.toFixed(2)}</p>
                <Button secondary className="removeBtn" onClick={() => handleRemoveProduct(id)}>
                    <CloseIcon /> Remove
                </Button>
            </TableRow>
        </ProductTable>
    );
};

export default CartItem;
