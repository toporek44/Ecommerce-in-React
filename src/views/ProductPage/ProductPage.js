import React from 'react';
import { Redirect } from 'react-router';
import MainTemplate from 'components/MainTemplate/MainTemplate';
import { Button } from 'components/Button/Button';
import Footer from 'components/Footer/Footer';
import { ReactComponent as TruckIcon } from 'assets/images/truck.svg';
import { ReactComponent as ReturnIcon } from 'assets/images/return.svg';
import { ReactComponent as BoxIcon } from 'assets/images/box.svg';
import TopHeader from 'components/TopHeader/TopHeader';
import { useCart } from 'hooks/useCart';
import { Wrapper, ProductImage, ProductDetails, DeliveryItem, DeliveryContainer } from './ProductPage.styles';

const ProductPage = () => {
    const { handleAddProduct, handleSetCurrentProduct } = useCart();
    const currentProduct = handleSetCurrentProduct();

    return (
        <>
            {currentProduct.length ? (
                <MainTemplate>
                    <TopHeader />
                    {currentProduct.map(({ image, id, product_name, company, price, description }, i, a) => (
                        <Wrapper key={id}>
                            <ProductImage src={image} />
                            <ProductDetails>
                                <p className="title">{product_name}</p>
                                <p className="company">{company}</p>
                                <p className="price">{price}</p>
                                <p className="small-title">Description</p>
                                <p className="desc">{description}</p>
                                <Button onClick={() => handleAddProduct(a[i])}>Add to cart</Button>
                            </ProductDetails>
                        </Wrapper>
                    ))}

                    <DeliveryContainer>
                        <DeliveryItem>
                            <ReturnIcon />
                            <p className="delivery-title">Free Returns On All Orders</p>
                            <p className="delivery-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto commodi corporis dolorem doloribus ducimus eaque eligendi enim harum, minima.
                            </p>
                        </DeliveryItem>

                        <DeliveryItem>
                            <BoxIcon />
                            <p className="delivery-title">Free Standard Over $75</p>
                            <p className="delivery-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto commodi corporis dolorem doloribus ducimus eaque eligendi enim harum, minima.
                            </p>
                        </DeliveryItem>

                        <DeliveryItem>
                            <TruckIcon />
                            <p className="delivery-title">Free Express over $150</p>
                            <p className="delivery-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto commodi corporis dolorem doloribus ducimus eaque eligendi enim harum, minima.
                            </p>
                        </DeliveryItem>
                    </DeliveryContainer>
                    <Footer />
                </MainTemplate>
            ) : (
                <Redirect to="/404" />
            )}
        </>
    );
};

export default ProductPage;
