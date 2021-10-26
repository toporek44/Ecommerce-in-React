import styled, { keyframes } from 'styled-components';

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scaleX(1);
  }
  to {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(500%) translateY(0);
  }
  to {
    transform: translateX(0) translateY(0);
  }
`;

const NotificationWrapper = styled.div`
    background: #000000;
    color: #ffffff;
    width: fit-content;
    padding: 30px 30px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 10px;
    right: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    //margin-bottom: 3rem;
    animation: ${slideAnimation} 1s ease-in-out 1 forwards, ${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;
    z-index: 9999;
    font-size: 1.2rem;

    @media (min-width: 993px) {
        right: 50px;
        transform: none;
        font-size: 1.6rem;
        padding: 30px 50px 15px;
        top: 100px;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 13px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 4px;
        z-index: 999;
        background: #ffffff;
    }

    &::before {
        opacity: 0.5;
    }

    &::after {
        transform: translateX(-50%) scaleX(1);
        transform-origin: left top;
        animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
        border-radius: 50px;
    }
`;

export { NotificationWrapper };
