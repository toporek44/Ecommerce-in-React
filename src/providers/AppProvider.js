import React from 'react';
import { FormProvider } from 'hooks/useForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { MenuProvider } from './MenuProvider';
import { ProductsProvider } from './ProductsProvider';
import { CartProvider } from './CartProvider';
import { ModalProvider } from './ModalProvider';
import { NotificationProvider } from './NotificationProvider';
import { StepProvider } from '../hooks/useStep';

const AppProvider = ({ children }) => (
    <Router>
        <StepProvider>
                <NotificationProvider>
                    <ModalProvider>
                        <CartProvider>
                            <ProductsProvider>
                                <MenuProvider>
                                    <ThemeProvider theme={theme}>
                                        <GlobalStyle />
                                        {children}
                                    </ThemeProvider>
                                </MenuProvider>
                            </ProductsProvider>
                        </CartProvider>
                    </ModalProvider>
                </NotificationProvider>
        </StepProvider>
    </Router>
);

export default AppProvider;
