import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const CategoriesItemsContainer = styled.div`
    width: 100%;

    .active {
        color: #000000;

        svg {
            fill: #000000;
        }
    }
`;

const SubCategories = styled.div`
    width: 100%;
    padding: 0.8rem 1.6rem;
    display: ${({ isSubCategoriesActive }) => (isSubCategoriesActive ? 'block' : 'none')};
`;

const ItemWrapper = styled(NavLink)`
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 0.8rem 1.6rem;
    color: ${({ secondary }) => (secondary ? '#000000' : '#757575')};
    font-family: 'Roboto', sans-serif;
    font-weight: ${({ secondary }) => (secondary ? 400 : 700)};
    font-size: ${({ secondary }) => (secondary ? '1.5rem' : '1.8rem')};

    svg {
        height: 10px;
        width: 10px;
        fill: #757575;
    }

    &:hover {
        background: #cccccc;
        color: #000000;
        cursor: pointer;
    }

    ${({ tertiary }) =>
        tertiary &&
        css`
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
        `}
`;

export { CategoriesItemsContainer, SubCategories, ItemWrapper };
