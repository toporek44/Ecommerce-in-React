import styled from 'styled-components';
import { Button } from '../../Button/Button';

const Wrapper = styled.div`
    text-decoration: none;
    color: #000000;

    .img-container {
        position: relative;

        ${Button} {
            display: none;
        }

        &:hover {
            ${Button} {
                display: flex;
            }
        }
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    .product-price {
        font-weight: 600;
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
    }
`;

const Title = styled.p`
    margin: 1rem 0 0 0;
    font-size: 1.5rem;
    text-decoration: none;
    color: #000000;
`;

export { Title, Wrapper };
