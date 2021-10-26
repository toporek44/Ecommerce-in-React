import React from 'react';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input.styles';
import { Wrapper } from './Subscribe.styles';

const Subscribe = () => (
    <Wrapper id="subscribe">
        <p className="title">Subscribe</p>
        <p className="text">To get special offers and VIP treatment:</p>
        <Input type="text" placeholder="Enter e-mail" />
        <Button secondary>Subscribe</Button>
    </Wrapper>
);

export default Subscribe;
