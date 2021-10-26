import { Switch, Route } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SidebarMenu from 'components/SidebarMenu/SidebarMenu';
import { MenuContext } from 'providers/MenuProvider';
import ProductPage from 'views/ProductPage/ProductPage';
import HomePage from 'views/HomePage/HomePage';
import CartPage from 'views/CartPage/CartPage';
import MainHeader from 'components/MainHeader/MainHeader';
import NewsletterModal from 'components/NewsletterModal/NewsletterModal';
import { NotificationContext } from 'providers/NotificationProvider';
import Page404 from 'views/Page404/Page404';
import { ProductsContext } from 'providers/ProductsProvider';
import { categoriesList } from 'assets/data/categories';
import Notification from 'components/Notification/Notification';
import { Wrapper } from './Root.styles';

function Root() {
    const { isActive } = useContext(MenuContext);
    const { notification } = useContext(NotificationContext);
    const { productsList } = useContext(ProductsContext);
    const params = useParams();
    const [isIdExists, setIdExists] = useState(false);

    useEffect(() => {
        const isProductExists = productsList.filter(({ id }) => id === params.id);
        if (isProductExists) setIdExists(true);
    }, [params.id, productsList]);

    return (
        <Wrapper isActive={isActive}>
            <SidebarMenu />
            <MainHeader />
            <NewsletterModal />
            {notification ? <Notification /> : null}
            <Switch>
                <Route path="/404">
                    <Page404 />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/product/:id?">{isIdExists ? <ProductPage /> : <Page404 />}</Route>
                <Route exact path={`/:category(${categoriesList.map(({ name }) => name).join('|')})?/:subCategory?`}>
                    <HomePage />
                </Route>
            </Switch>
        </Wrapper>
    );
}

export default Root;
