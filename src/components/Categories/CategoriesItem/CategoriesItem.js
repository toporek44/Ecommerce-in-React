import React, { useContext, useState } from 'react';
import { MenuContext } from 'providers/MenuProvider';
import { ReactComponent as ArrowIcon } from 'assets/images/triangle.svg';
import { CategoriesItemsContainer, SubCategories, ItemWrapper } from './CategoriesItem.styles';

const CategoriesItem = ({ subCategories = [], name = '' }) => {
    const [isSubCategoriesActive, setSubCategoriesActive] = useState(false);
    const { handleCloseMenu } = useContext(MenuContext);
    const handleClick = () => {
        handleCloseMenu(false);
        setSubCategoriesActive(!isSubCategoriesActive);
    };
    return (
        <CategoriesItemsContainer>
            <ItemWrapper onClick={handleClick} key={name} to={`/${name}`} activeClassName="active">
                <>
                    {name} {subCategories.length ? <ArrowIcon /> : null}
                </>
            </ItemWrapper>
            {subCategories.length ? (
                <SubCategories isSubCategoriesActive={isSubCategoriesActive}>
                    {subCategories.map((item) => (
                        <ItemWrapper tertiary="true" key={item} to={`/${name}/${item}`}>
                            {item}
                        </ItemWrapper>
                    ))}
                </SubCategories>
            ) : null}
        </CategoriesItemsContainer>
    );
};

export default CategoriesItem;
