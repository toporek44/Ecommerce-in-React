import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.4rem 1.6rem;
    height: 40px;

    .input-container {
        width: 100%;
        max-width: 500px;
        display: ${({ isInputActive }) => (isInputActive ? 'block' : 'none')};
        animation: fadeIn 0.1s linear forwards;
        position: relative;
        z-index: 999999;
        margin-right: 2rem;

        .search-container {
            max-height: 300px;
            overflow-y: scroll;
            padding-right: 0;
            background: #ffffff;
            position: absolute;
            width: 100%;

            ::-webkit-scrollbar {
                width: 10px;
            }

            ::-webkit-scrollbar-track {
                background: #f1f1f1;
            }

            ::-webkit-scrollbar-thumb {
                background: #888;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
        }

        input {
            margin-bottom: 0;
            height: 35px;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    p {
        font-size: 2.4rem;
        margin: 0;
    }

    .buttons-container {
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer;
        }

        a {
            margin-right: 1.6rem;
            display: flex;
        }

        svg {
            height: 23px;
            width: 23px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;

const SearchItem = styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid #cccccc;
    border-top: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000000;

    &:hover {
        background: #cccccc;
    }

    img {
        width: 40px;
        min-width: 40px;
        object-fit: cover;
        height: 40px;
        margin-right: 1rem;

        @media (min-width: 650px) {
            margin-right: 2rem;
        }
    }

    .product-name {
        font-size: 1.2rem;

        @media (min-width: 650px) {
            font-size: 1.5rem;
        }
    }
`;

const StyledLink = styled(Link)`
    position: relative;

    &::before {
        content: '${({ length }) => length || ''}';
        border-radius: 100%;
        background: #000000;
        position: absolute;
        min-height: 20px;
        min-width: 20px;
        height: 20px;
        width: 20px;
        font-weight: 600;
        text-align: center;
        left: -4px;
        bottom: -6px;
        z-index: 9;
        font-size: 0.95rem;
        line-height: 20.5px;
        color: #ffffff;
        display: ${({ length }) => (length ? 'block' : 'none')};
    }
`;

export { SearchItem, Wrapper, StyledLink };
