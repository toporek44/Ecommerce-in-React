import React from 'react';
import { categoriesList } from 'assets/data/categories';
import CategoriesItem from './CategoriesItem/CategoriesItem';
import { CategoriesContainer } from './Categories.styles';

const Categories = () => (
    <CategoriesContainer>
        {categoriesList.map(({ name, subCategories }) => (
            <CategoriesItem name={name} key={name} subCategories={subCategories} />
        ))}
    </CategoriesContainer>
);

export default Categories;
