import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

const Form = styled.form`
    padding: 0 1.6rem;
    width: 100%;

    .main-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: column;

        @media (min-width: 600px) {
            flex-direction: row;
        }
    }

    .shipment-container {
        max-width: 500px;
        @media (min-width: 600px) {
            margin-right: 4rem;
        }
    }

    .card-container {
        width: 100%;
        max-width: 350px;

        img {
            height: 250px;
            @media (min-width: 600px) {
                height: 200px;
            }

            @media (min-width: 700px) {
                height: 300px;
            }
        }
    }

    input {
        margin-bottom: 0.4rem;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

   

    .checkbox-container {
        display: flex;
        height: 36px;
        margin: 2rem 0;
    }

    .name-container {
        display: flex;

        label {
            margin-right: 2rem;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;

const RadioItem = styled.div`
    margin-right: 1rem;

    .label {
        display: block;
        height: 36px;
        padding: 0.2rem;
        transition: 0.3s all ease-in-out;

        path {
            fill: #000000;
        }
    }
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
    position: absolute;
    left: -500%;
    opacity: 0;
    visibility: hidden;

    &:hover ~ label {
        cursor: pointer;
        background: #000000;
        border-radius: 4px;
        transition: 0.3s all ease-in-out;
        height: 100%;

        path {
            fill: #ffffff;
        }
    }

    ${({ checked }) =>
        checked &&
        css`
            &:checked ~ label {
                background: #000000;
                border-radius: 4px;

                path {
                    fill: #ffffff;
                }
            }
        `}
`;

export { Wrapper, RadioItem, Form, RadioButton };
