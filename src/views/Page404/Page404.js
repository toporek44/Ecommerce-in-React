import React from 'react';
import { Link } from 'react-router-dom';
import MainTemplate from 'components/MainTemplate/MainTemplate';
import { Wrapper } from './Page404.styles';

const Page404 = () => (
    <MainTemplate>
        <Wrapper>
            <p className="text">Sorry Page Not Found</p>
            <p className="error">404</p>
            <Link to="/">Go to Home</Link>
        </Wrapper>
    </MainTemplate>
);

export default Page404;
