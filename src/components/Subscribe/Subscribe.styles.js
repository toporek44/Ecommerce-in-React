import styled from 'styled-components';

const Wrapper = styled.div`
    background: #000000;
    color: #ffffff;
    padding: 3.2rem 1.6rem;

    @media (min-width: 993px) {
        margin: 0 1.6rem;
    }

    .title {
        font-size: 3.6rem;
        margin: 1rem 0;
    }

    .text {
        font-size: 1.5rem;
        margin: 1.5rem 0;
    }
`;

export { Wrapper };
