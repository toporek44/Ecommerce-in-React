import styled from 'styled-components';

const Wrapper = styled.header`
    background: #000000;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    @media (min-width: 993px) {
        display: none;
    }

    button {
        background: transparent;
        height: 84px;
        border: none;
        padding: 0 1.6rem;

        &:hover {
            cursor: pointer;
            background: #cccccc;

            svg {
                rect {
                    fill: #000000;
                }

                height: 30px;
                width: 30px;
            }
        }
    }

    svg {
        height: 30px;
        width: 30px;
    }
`;

export { Wrapper };
