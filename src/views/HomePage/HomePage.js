import React, { useContext } from 'react';
import { useParams } from 'react-router';
import MainTemplate from 'components/MainTemplate/MainTemplate';
import TopHeader from 'components/TopHeader/TopHeader';
import ImageHeader from 'components/ImageHeader/ImageHeader';
import Products from 'components/Products/Products';
import Subscribe from 'components/Subscribe/Subscribe';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';
import { ProductsContext } from 'providers/ProductsProvider';

const HomePage = () => {
    const { productsList } = useContext(ProductsContext);
    const { category } = useParams();

    return (
        <MainTemplate>
            <TopHeader title={category} />
            <ImageHeader />
            {productsList.length > 0 ? <Products /> : 'Loading'}
            <Subscribe />
            <Contact />
            <Footer />
        </MainTemplate>
    );
};

export default HomePage;
