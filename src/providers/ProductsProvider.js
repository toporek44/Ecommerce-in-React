import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { categoriesList } from '../assets/data/categories';

const ProductsContext = React.createContext();
const ProductsProvider = ({ children }) => {
    const [productsList, setProductsList] = useState([]);
    const URL = 'https://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6';
    const products = axios.create();

    const handleRandomize = (array) => Math.floor(Math.random() * array.length);

    useEffect(() => {
        (async () => {
            try {
                const response = await products.get(URL);
                const customProductList = response.data.map((product) => {
                    const categoriesNum = handleRandomize(categoriesList);
                    const subCategoriesNum = handleRandomize(categoriesList[categoriesNum].subCategories);
                    const subCategoriesLength = categoriesList[categoriesNum].subCategories.length;
                    const category = categoriesList[categoriesNum].name;
                    const subCategory = subCategoriesLength > 0 ? categoriesList[categoriesNum].subCategories[subCategoriesNum] : null;
                    return { ...product, category, subCategory };
                });
                setProductsList(customProductList);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return <ProductsContext.Provider value={{ productsList }}>{children}</ProductsContext.Provider>;
};

export { ProductsProvider, ProductsContext };
