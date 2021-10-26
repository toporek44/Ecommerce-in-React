import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    @media (min-width: 993px) {
        flex-direction: row;
    }

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: ${({ isActive }) => (isActive ? 'block' : 'none')};
        background: rgba(0, 0, 0, 0.6);
    }
`;

export { Wrapper };
