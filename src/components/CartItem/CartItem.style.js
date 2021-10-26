import styled from 'styled-components';

const ProductTable = styled.div``;

const TableRow = styled.div`
    display: ${({ secondary }) => (secondary ? 'none' : 'grid')};
    grid-column-gap: 2rem;

    margin: 0 auto;
    max-width: 620px;

    @media (min-width: 650px) {
        display: ${({ secondary }) => (secondary ? 'grid' : 'grid')};
        grid-template-columns: 120px 90px 120px 90px 120px;
    }

    .label {
        font-weight: 600;
    }

    .removeBtn {
        height: 25px;
        width: 100px;
        padding: 0;
        margin: 1.5rem 0;
    }

    svg {
        width: 10px;
        height: 10px;
        margin-right: 0.4rem;

        path {
            fill: #ffffff;
        }
    }

    .price {
        font-size: 1.8rem;
        font-weight: 500;
        margin-top: 0.5rem;
        margin-bottom: 0;

        span {
            font-weight: 600;
            margin-right: 0.3rem;
        }

        @media (min-width: 650px) {
            font-size: 1.6rem;
            max-width: 120px;
            margin-top: 1.5rem;
            margin-bottom: 2rem;

            span {
                display: none;
            }
        }
    }

    .image-container {
        display: block;
        text-decoration: none;
        color: #000000;

        img {
            height: 200px;
            object-fit: cover;

            @media (min-width: 650px) {
                height: 120px;
                width: 120px;
            }
        }

        .product-name {
            font-weight: 600;
            margin-top: 1rem;
            font-size: 2rem;
            margin-bottom: 0;

            @media (min-width: 650px) {
                font-size: 1.2rem;
                max-width: 120px;
                margin-top: 0;
                margin-bottom: 20px;
            }
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    margin: 1.5rem 0;
    width: 120px;
    max-width: 120px;

    button {
        font-size: 2rem;
        background: #cccccc;
        border: none;
        font-weight: 600;
        padding: 0;
        width: 30px;
        min-width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .value {
        font-weight: 500;
        font-size: 2rem;
        margin: 0;
        text-align: center;
        width: 50px;
    }
`;

export { Wrapper, ProductTable, TableRow };
