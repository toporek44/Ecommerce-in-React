import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 999999;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-top: 10rem;
    display: ${({ isModalActive }) => (isModalActive ? 'block' : 'none')};
    @keyframes zoomIn {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
`;

const NewsletterContainer = styled.div`
    max-width: 900px;
    background: #ffffff;
    padding: 3.2rem 6.8rem;
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    text-align: center;
    position: relative;
    animation: zoomIm 2s linear forwards;

    button {
        margin: 2rem auto;
        padding: 1.2rem 2.4rem;
        border: none;
    }

    .close-btn {
        position: absolute;
        top: 20px;
        right: 45px;
        cursor: pointer;

        svg {
            width: 26px;
            height: 26px;
        }
    }

    .title {
        font-size: 3rem;
        margin: 1rem 0;
        letter-spacing: 4px;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: 1.5rem;
        margin: 1.5rem 0;
    }
`;

export { Wrapper, NewsletterContainer };
