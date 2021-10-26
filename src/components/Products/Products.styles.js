import styled from 'styled-components';

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3.2rem;
    filter: grayscale(75%);
    margin: 0 1.6rem;

    @media (min-width: 993px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const ItemsCount = styled.p`
    color: #757575;
    margin: 1.5rem 1.6rem;
`;

export { ProductsGrid, ItemsCount };
