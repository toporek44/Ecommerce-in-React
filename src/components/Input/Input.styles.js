import styled from "styled-components"

const Input = styled.input`
    width: 100%;
    border: 1px solid #000000;
    padding: 0.8rem;
    font: inherit;
    margin-bottom: 1.2rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const ErrorMessage = styled.p`
    font-size: 1.3rem;
    color: #cd1616;
    font-weight: 500;
    margin: 0;

    &:first-letter {
      text-transform: uppercase;
    }
`
export  {Input, ErrorMessage}