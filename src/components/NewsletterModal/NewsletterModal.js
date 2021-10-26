import React, { useContext } from 'react';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import { ModalContext } from 'providers/ModalProvider';
import { Input } from 'components/Input/Input.styles';
import { Button } from 'components/Button/Button';
import { NewsletterContainer, Wrapper } from './NewsletterModal.styles';

const NewsletterModal = () => {
    const { isModalActive, handleCloseModal } = useContext(ModalContext);
    return (
        <Wrapper isModalActive={isModalActive}>
            <NewsletterContainer>
                <button className="close-btn" onClick={handleCloseModal}>
                    <CloseIcon />
                </button>
                <p className="title">Newsletter</p>
                <p className="subtitle">Join our mailing list to receive updates on new arrivals and special offers.</p>
                <Input placeholder="Enter e-mail" />
                <Button secondary="true" onClick={handleCloseModal}>
                    Subscribe
                </Button>
            </NewsletterContainer>
        </Wrapper>
    );
};

export default NewsletterModal;
