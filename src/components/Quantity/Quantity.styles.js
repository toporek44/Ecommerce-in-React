import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    margin: 1.5rem 0;

    button {
        font-size: 2rem;
        background: #cccccc;
        border: none;
        font-weight: 600;
        padding: 0;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .value {
        font-weight: 500;
        font-size: 2rem;
        margin: 0 2rem;
    }
`;

export { Wrapper };
