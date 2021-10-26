import styled from 'styled-components';

const Wrapper = styled.div`
    width: 250px;
    min-width: 250px;
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
    background: #ffffff;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 990;
    height: 100%;
    min-height: 100vh;
    overflow-y: scroll;

    @media (min-width: 993px) {
        display: flex;
        overflow-y: initial;
    }
`;

const Logo = styled.h3`
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 2.4rem;
    padding: ${({ secondary }) => (secondary ? '1.4rem' : '1.6rem')};
    margin: 1rem 0;
    font-weight: 500;
    color: ${({ secondary }) => (secondary ? '#ffffff' : '#000000')};
    text-decoration: none;
`;

const CloseBtn = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    width: 40px;
    height: 40px;

    svg {
        width: 10px;
        height: 10px;
    }

    @media (min-width: 993px) {
        display: none;
    }
`;

export { CloseBtn, Wrapper, Logo };
