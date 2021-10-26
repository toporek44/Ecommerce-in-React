import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'components/SidebarMenu/SidebarMenu.styles';
import { MenuContext } from 'providers/MenuProvider';
import { ReactComponent as HamburgerIcon } from 'assets/images/hamburger.svg';
import { Wrapper } from './MainHeader.styles';

const MainHeader = () => {
    const { toggleMenu } = useContext(MenuContext);

    return (
        <Wrapper>
            <Logo secondary="true" as={Link} to="/">
                Logo
            </Logo>
            <button onClick={toggleMenu}>
                <HamburgerIcon />
            </button>
        </Wrapper>
    );
};

export default MainHeader;
