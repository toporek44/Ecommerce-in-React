import styled from 'styled-components';

const Wrapper = styled.div`

  .checkbox {
    --background: #fff;
    --border: #D1D6EE;
    --border-hover: #BBC1E1;
    --border-active: #1E2235;
    --tick: #fff;
    position: relative;
    display: flex;
    margin: 3rem 0;

    p {
      margin: 0;
      margin-left: 1rem;
      font-size: 1.6rem;
      transform: translateY(-2px);

      @media (min-width: 650px) {
        white-space: nowrap;
      }

      a {
        font-weight: 600;
        color: #969696;
      }
    }

    input,
    svg {
      width: 20px;
      height: 20px;
      min-width: 20px;
      display: block;
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 4px;
      transition: box-shadow .3s;
      box-shadow: inset 0 0 0 var(--s, 2px) var(--b, var(--border));

      &:hover {
        --s: 2px;
        --b: var(--border-hover);
      }

      &:checked {
        --b: var(--border-active);
      }
    }

    svg {
      pointer-events: none;
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: var(--stroke, var(--border-active));
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      transform: scale(var(--scale, 1)) translateZ(0);
    }

    &.path {
      input {
        &:checked {
          --s: 2px;
          transition-delay: .4s;

          & + svg {
            --a: 16.1 86.12;
            --o: 102.22;
          }
        }
      }

      svg {
        stroke-dasharray: var(--a, 86.12);
        stroke-dashoffset: var(--o, 86.12);
        transition: stroke-dasharray .6s, stroke-dashoffset .6s;
      }
    }

    &.bounce {
      --stroke: var(--tick);

      input {
        &:checked {
          --s: 11px;

          & + svg {
            animation: bounce .4s linear forwards .2s;
          }
        }
      }

      svg {
        --scale: 0;
      }
    }
  }

  @keyframes bounce {
    50% {
      transform: scale(1.2);
    }
    75% {
      transform: scale(.9);
    }
    100% {
      transform: scale(1);
    }
  }

\`  
`;
export { Wrapper };
