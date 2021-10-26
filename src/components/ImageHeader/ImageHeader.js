import React from 'react';
import headerImage from 'assets/images/header-image.jpg';
import { Button } from 'components/Button/Button';
import { ImageHeaderContent, Wrapper } from './ImageHeader.styles';

const ImageHeader = () => (
    <Wrapper>
        <img src={headerImage} alt="men" />
        <ImageHeaderContent>
            <p className="title">New arrivals</p>
            <p className="subtitle">Collection 2016</p>
            <Button as="a" href="#products">
                Shop Now
            </Button>
        </ImageHeaderContent>
    </Wrapper>
);

export default ImageHeader;
