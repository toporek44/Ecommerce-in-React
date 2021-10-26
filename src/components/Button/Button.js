import styled, { css } from 'styled-components';

export const Button = styled.button`
    color: #fff;
    background: ${({disabled}) => disabled? "#cccccc" : "#000000"};
    padding: 1.2rem 2.4rem;
    font-size: 1.8rem;
    border: none;
    text-decoration: none;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    margin: 1.5rem 0;
    text-transform: uppercase;
    display: block;
    width: fit-content;
    
    &:hover {
        cursor: ${({disabled}) => disabled? "initial" : "pointer"};
        background: #cccccc;
        color:${({disabled}) => disabled? "#ffffff" : "#000000"};

        svg {
            fill: #000000;
        }
    }

    ${({ secondary }) =>
        secondary &&
        css`
            background: #f44336;
            margin: 0 0 1.6rem 0;
            padding: 1rem 1.6rem;
            text-transform: none;
            font-size: 1.5rem;
        `}

    ${({ tertiary }) =>
        tertiary &&
        css`
            margin: 0;
            padding: 0.8rem 1.6rem;
            text-transform: none;
            font-size: 1.2rem;
            width: 100%;
        `}

  ${({ buyBtn }) =>
        buyBtn &&
        css`
            margin: 0;
            padding: 0.8rem 1.6rem;
            text-transform: none;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            svg {
                height: 14px;
                width: 14px;
                fill: #ffffff;
                margin-left: 0.4rem;
            }
        `}
`;
