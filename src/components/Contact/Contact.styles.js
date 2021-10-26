import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    padding: 6.4rem 0;

    @media (min-width: 993px) {
        margin: 0 1.6rem;
    }

    .contact-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 0.8rem;

        &-secondary {
            align-items: flex-start;

            p {
                text-align: left;
            }
        }
    }

    .contact-title {
        font-size: 20px;
        margin: 1rem 0;
    }

    .small-text {
        font-size: 1.2rem;
        margin-bottom: 1.2rem;
        margin-top: 0;
        text-align: center;
        display: flex;
        align-items: center;
        color: #000000;
    }

    .contact-icon {
        height: 12px;
        width: 12px;
        margin-right: 0.5rem;
    }

    .icons-container {
        margin-top: 1.5rem;
    }

    .social-icon {
        height: 16px;
        width: 16px;
        margin-right: 0.3rem;
    }

    input {
        font-size: 1.2rem;
    }
`;

export { Wrapper };
