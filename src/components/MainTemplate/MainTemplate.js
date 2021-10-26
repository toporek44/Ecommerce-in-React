import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 84px;
    height: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    @media (min-width: 993px) {
        margin-left: 250px;
        margin-top: 0;
    }
`;

const MainTemplate = ({ children }) => <Wrapper>{children}</Wrapper>;

export default MainTemplate;
