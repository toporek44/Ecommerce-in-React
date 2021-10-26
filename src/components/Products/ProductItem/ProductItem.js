import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { ReactComponent as CartIcon } from 'assets/images/cart.svg';
import { useCart } from 'hooks/useCart';
import { Title, Wrapper } from './ProductItem.styles';

const ProductItem = (item) => {
    const { handleAddProduct } = useCart();

    return (
        <Wrapper>
            <div className="img-container">
                <img src={item.image} alt={item.product_name} />
                <Button buyBtn onClick={() => handleAddProduct(item)}>
                    Buy now
                    <CartIcon />
                </Button>
            </div>
            <Title as={Link} to={`/product/${item.id}`}>
                {item.product_name}
            </Title>
            <p className="product-price">{item.price}</p>
        </Wrapper>
    );
};

export default ProductItem;
