import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProductsContext } from 'providers/ProductsProvider';
import ProductItem from './ProductItem/ProductItem';
import { ProductsGrid, ItemsCount } from './Products.styles';

const Products = () => {
    const { productsList } = useContext(ProductsContext);
    const [productsCount, setProductsCount] = useState(0);
    const params = useParams();

    useEffect(() => {
        const matchingProducts = productsList.filter((product) =>
            product.category === params.category && !product.subCategory ? product : product.category === params.category && product.subCategory === params.subCategory ? product : null,
        );
        setProductsCount(matchingProducts.length ? matchingProducts.length : params.category ? 0 : productsList.length);
    }, [params.category, params.subCategory]);

    return (
        <>
            <ItemsCount>{productsCount} Items</ItemsCount>

            <ProductsGrid id="products">
                {productsList.map(({ product_name, id, image, price, category, subCategory }) =>
                    category === params.category && !subCategory ? (
                        <ProductItem key={id} product_name={product_name} image={image} price={price} id={id} />
                    ) : !params.category ? (
                        <ProductItem key={id} product_name={product_name} image={image} price={price} id={id} />
                    ) : category === params.category && subCategory === params.subCategory ? (
                        <ProductItem key={id} product_name={product_name} image={image} price={price} id={id} />
                    ) : null,
                )}
            </ProductsGrid>
        </>
    );
};

export default Products;
