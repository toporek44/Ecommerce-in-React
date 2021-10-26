import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 0 1.6rem 8rem;
    position: relative;
    flex-direction: column;

    @media (min-width: 1250px) {
        flex-direction: row;
    }
`;

const CartItems = styled.div`
    display: flex;
    flex-direction: column;
`;

const EmptyInfo = styled.p`
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
`;

const CheckoutContainer = styled.div`
    max-height: 290px;
    background: #000000;
    padding: 4.8rem;
    color: #ffffff;
    margin-top: 3rem;

    @media (min-width: 1250px) {
        margin-left: auto;
        max-width: 320px;
        margin-top: 0;
    }

    .checkout-title {
        font-size: 3rem;
        margin: 0;
    }

    .total-value {
        font-size: 2rem;
        margin: 0;
        font-weight: 500;
        letter-spacing: 2px;
    }

    .shipping-info {
        font-size: 1.3rem;
        color: #cccccc;
    }
`;

export { Wrapper, CartItems, EmptyInfo, CheckoutContainer };
