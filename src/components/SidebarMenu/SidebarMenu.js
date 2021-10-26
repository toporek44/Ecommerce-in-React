import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemWrapper } from 'components/Categories/CategoriesItem/CategoriesItem.styles';
import { ModalContext } from 'providers/ModalProvider';
import { MenuContext } from 'providers/MenuProvider';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import Categories from 'components/Categories/Categories';
import { Wrapper, Logo, CloseBtn } from './SidebarMenu.styles';

const SidebarMenu = () => {
    const { isActive, handleCloseMenu } = useContext(MenuContext);
    const { handleOpenModal } = useContext(ModalContext);

    return (
        <Wrapper isActive={isActive}>
            <CloseBtn onClick={handleCloseMenu}>
                <CloseIcon />
            </CloseBtn>
            <Logo as={Link} to="/" onClick={handleCloseMenu}>
                Logo
            </Logo>
            <Categories />
            <ItemWrapper as="a" href="/#contact" secondary="true">
                Contact
            </ItemWrapper>
            <ItemWrapper as="div" secondary="true" onClick={handleOpenModal}>
                Newsletter
            </ItemWrapper>
            <ItemWrapper as="a" href="/#subscribe" secondary="true">
                Subscribe
            </ItemWrapper>
        </Wrapper>
    );
};

export default SidebarMenu;
