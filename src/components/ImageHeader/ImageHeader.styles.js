import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin: 0 1.6rem;

    img {
        width: 100%;
    }
`;
const ImageHeaderContent = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    padding: 2.4rem 2.2rem;
    color: #ffffff;

    .title {
        font-size: 3.6rem;
        margin: 1rem 0;
        font-weight: 400;

        @media (min-width: 993px) {
            font-size: 6.4rem;
        }
    }

    .subtitle {
        text-transform: uppercase;
        font-size: 3.6rem;
        margin: 1rem 0;
        display: none;

        @media (min-width: 993px) {
            display: block;
        }
    }
`;

export { Wrapper, ImageHeaderContent };
