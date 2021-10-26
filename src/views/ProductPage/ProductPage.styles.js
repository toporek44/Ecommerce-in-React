import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 3rem 1.6rem 0;
    flex-direction: column;

    @media (min-width: 600px) {
        flex-direction: row;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-bottom: 2rem;

    @media (min-width: 600px) {
        width: 50%;
        margin-right: 4rem;
        margin-bottom: 0;
    }

    @media (min-width: 993px) {
        width: 100%;
    }
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    .title {
        font-size: 2.4rem;
        margin: 1rem 0;
        line-height: 1;
    }

    .company {
        font-size: 1.3rem;
        margin: 0;
        line-height: 1;
    }

    .price {
        font-size: 1.8rem;
        margin: 1rem 0;
    }

    .desc {
        margin: 0 0 2rem;
        font-size: 1.4rem;
    }

    .small-title {
        font-size: 1.7rem;
        margin: 0;
        font-weight: 600;
    }
`;

const DeliveryContainer = styled.div`
    display: flex;
    padding: 7rem 1.6rem;
    flex-direction: column;
    @media (min-width: 600px) {
        flex-direction: row;
    }
`;

const DeliveryItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    @media (min-width: 600px) {
        margin-right: 2rem;
        margin-bottom: 0;
    }

    @media (min-width: 993px) {
        margin-right: 5rem;
    }

    .delivery-title {
        font-weight: 600;
        margin: 1.5rem 0 0;
        font-size: 1.5rem;

        @media (min-width: 600px) {
            font-size: 1.3rem;
        }

        @media (min-width: 993px) {
            font-size: 1.6rem;
        }
    }

    .delivery-desc {
        font-size: 1.3rem;
        margin-top: 0.4rem;

        @media (min-width: 600px) {
            font-size: 1.1rem;
        }

        @media (min-width: 993px) {
            max-width: 250px;
            font-size: 1.3rem;
        }
    }

    svg {
        height: 30px;
        width: 30px;

        @media (min-width: 993px) {
            height: 40px;
            width: 40px;
        }
    }
`;

export { Wrapper, DeliveryContainer, DeliveryItem, ProductDetails, ProductImage };
