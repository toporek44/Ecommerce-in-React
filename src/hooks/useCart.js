import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { ProductsContext } from '../providers/ProductsProvider';
import { CartContext } from '../providers/CartProvider';
import { NotificationContext } from '../providers/NotificationProvider';
import { useForm } from './useForm';
import {initialFormData} from "../components/OrderDetails/formiInitialValues";

export const useCart = () => {
    const { productsList } = useContext(ProductsContext);
    const { setTotal, cart, setCart, cartFromLocalStorage, total, totalFromStorage, isProceeded, setIsProceeded, isCheckout, setCheckout } = useContext(CartContext);
    const { dispatchNotification } = useContext(NotificationContext);
    const { handleClearForm } = useForm(initialFormData);
    const params = useParams();

    const handleSetCurrentProduct = () => productsList.filter(({ id }) => id === Number(params.id));

    const handleAddProduct = (product) => {
        if (!product) return;
        const productPrice = Number(product.price.slice(1, product.price.length));
        const productExists = cart.find(({ id }) => id === product.id);
        if (productExists) return dispatchNotification('Product is already in cart.');
        setCart((prev) => [...prev, { ...product, productTotal: productPrice, quantity: 1 }]);
        dispatchNotification('Product added to the cart.');
    };

    const handleProceed = () => {
        setIsProceeded(true);
        setCart([]);
        handleClearForm();
        setCheckout(false);
    };

    const handleRemoveProduct = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total', total);
    }, [cart, setCart, handleRemoveProduct, handleAddProduct, setTotal, total]);

    return {
        handleRemoveProduct,
        handleAddProduct,
        handleSetCurrentProduct,
        handleProceed,
        cartFromLocalStorage,
        cart,
        setCart,
        isProceeded,
        totalFromStorage,
        isCheckout,
    };
};
