import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from 'assets/images/cart.svg';
import { ReactComponent as LoupIcon } from 'assets/images/loup.svg';
import { Input } from 'components/Input/Input.styles';
import { ProductsContext } from 'providers/ProductsProvider';
import { CartContext } from 'providers/CartProvider';
import { useStep } from 'hooks/useStep';
import { Wrapper, StyledLink, SearchItem } from './TopHeader.styles';

const TopHeader = ({ title = '' }) => {
    const [isInputActive, setInputActive] = useState(false);
    const { productsList } = useContext(ProductsContext);
    const [searchList, setSearchList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const { cart, setIsProceeded } = useContext(CartContext);
    const { setStep } = useStep();

    const handleProductSearch = (e) => {
        const { value } = e.target;
        setInputValue(value);
        const searchResults = productsList.filter((product) => product.product_name.toLowerCase().includes(inputValue.toLowerCase()));
        setSearchList(inputValue ? searchResults : []);
    };

    const handleClear = () => {
        setInputValue('');
        setSearchList([]);
    };

    const handleInitialCart = () => {
        setIsProceeded(false);
        setStep(1);
    };

    return (
        <Wrapper isInputActive={isInputActive}>
            <p>{title}</p>
            <div className="input-container">
                <Input type="text" placeholder="eg. Wine" onChange={handleProductSearch} value={inputValue} />
                {searchList.length > 0 ? (
                    <div className="search-container">
                        {searchList.map(({ image, product_name, id }) => (
                            <SearchItem key={id} as={Link} to={`/product/${id}`} onClick={handleClear}>
                                <img src={image} alt="" />
                                <p className="product-name">{product_name}</p>
                            </SearchItem>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className="buttons-container">
                <StyledLink length={cart.length} onClick={handleInitialCart} to="/cart">
                    <CartIcon />
                </StyledLink>
                <LoupIcon onClick={() => setInputActive(!isInputActive)} />
            </div>
        </Wrapper>
    );
};

export default TopHeader;
