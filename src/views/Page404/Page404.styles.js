import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10rem;

    .text {
        font-size: 3rem;
        font-weight: 500;
    }

    .error {
        font-size: 10rem;
        font-weight: 600;
        margin: 0;
    }

    a {
        font-size: 2rem;
        color: #000000;
        margin-top: 3rem;
    }
`;

export { Wrapper };
