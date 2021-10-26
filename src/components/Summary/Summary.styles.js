import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    padding: 0 1.6rem;
    margin: 0 auto;

    .title {
        font-size: 1.7rem;

        @media (min-width: 600px) {
            font-size: 2rem;
        }
    }

    .buttons-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .detail-title {
        font-size: 1.3rem;
        font-weight: 500;
        margin: 0;
    }

    .detail-value {
        margin-top: 0.4rem;
        font-size: 1.4rem;
        @media (min-width: 600px) {
            font-size: 1.6rem;
        }

        &:first-letter {
            text-transform: uppercase;
        }
    }
`;

const ProductSummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .name {
        font-weight: 500;
        margin: 0;
        font-size: 1.2rem;
        @media (min-width: 600px) {
            font-size: 1.6rem;
        }
    }

    .quantity {
        font-size: 1rem;
        margin-top: 0;

        @media (min-width: 600px) {
            font-size: 1.2rem;
        }
    }

    .total-product-price {
        margin: 0;
        font-weight: 500;
        font-size: 1.3rem;

        @media (min-width: 600px) {
            font-size: 1.6rem;
        }
    }

    .total-price {
        font-weight: 600;
        font-size: 1.3rem;
        margin: 0;

        @media (min-width: 600px) {
            font-weight: 600;
            font-size: 1.7rem;
        }
    }
`;

const SuccessfulMessage = styled.div`
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    flex-direction: column;

    p {
        font-size: 3rem;
    }

    svg {
        height: 100px;
        width: 100px;
        margin-bottom: 2rem;
    }
`;

export { Wrapper, SuccessfulMessage, ProductSummaryItem };
