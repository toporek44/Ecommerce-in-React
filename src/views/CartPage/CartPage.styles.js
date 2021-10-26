import styled from 'styled-components';

const OrderStepBar = styled.div`
    max-width: 540px;
    width: 100%;
    display: flex;
    padding: 0 3rem;
    position: relative;
    justify-content: space-between;
    margin: 5rem auto 10rem;

    @media (min-width: 500px) {
        padding: 0 6rem;
    }

    .step-line {
        width: 200px;
        height: 1px;
        background: #000000;
        position: relative;
        top: 5px;
    }
`;

const StepItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    &:hover {
        cursor: ${({ stepActive }) => (stepActive ? 'pointer' : 'initial')};
    }

    p {
        position: absolute;
        top: 10px;
        font-weight: 500;
        font-size: 1.2rem;

        @media (min-width: 500px) {
            font-size: 1.6rem;
        }
    }

    .dot {
        padding: 0.6rem;
        background: ${({ stepActive, inProgress }) => (stepActive || inProgress ? '#000000' : '#cccccc')};
        border-radius: 100%;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 1rem;
            border-radius: 100%;
            border: 2px solid ${({ stepActive }) => (stepActive ? '#000000' : '#cccccc')};
        }
    }
`;

export { OrderStepBar, StepItem };
