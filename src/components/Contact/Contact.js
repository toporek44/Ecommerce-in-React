import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { ReactComponent as PinIcon } from 'assets/images/location.svg';
import { ReactComponent as PhoneIcon } from 'assets/images/phone.svg';
import { ReactComponent as MailIcon } from 'assets/images/email.svg';
import { ReactComponent as AmexIcon } from 'assets/images/amex.svg';
import { ReactComponent as CardIcon } from 'assets/images/card.svg';
import { ReactComponent as FbIcon } from 'assets/images/facebook.svg';
import { ReactComponent as IgIcon } from 'assets/images/instagram.svg';
import { ReactComponent as SnapIcon } from 'assets/images/snapchat.svg';
import { ReactComponent as PrintIcon } from 'assets/images/pinterest.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/twitter.svg';
import { ReactComponent as LinkedIcon } from 'assets/images/linkedin.svg';
import { Input } from 'components/Input/Input.styles';
import { Wrapper } from './Contact.styles';

const Contact = () => (
    <Wrapper id="contact">
        <div className="contact-item">
            <p className="contact-title">Contact</p>
            <p className="small-text">Questions? Go ahead.</p>
            <form>
                <Input type="text" name="name" placeholder="Name" />
                <Input type="text" name="email" placeholder="Email" />
                <Input type="text" name="subject" placeholder="Subject" />
                <Input type="text" name="message" placeholder="Message" />
                <Button tertiary type="submit">
                    Send
                </Button>
            </form>
        </div>

        <div className="contact-item">
            <p className="contact-title">About</p>
            <Link to="" className="small-text">
                About Us
            </Link>
            <Link to="" className="small-text">
                We're hiring
            </Link>
            <Link to="" className="small-text">
                Support
            </Link>
            <Link to="" className="small-text">
                Find store
            </Link>
            <Link to="" className="small-text">
                Shipment
            </Link>
            <Link to="" className="small-text">
                Payment
            </Link>
            <Link to="" className="small-text">
                Gift card
            </Link>
            <Link to="" className="small-text">
                Return
            </Link>
            <Link to="" className="small-text">
                Help
            </Link>
        </div>

        <div className="contact-item contact-item-secondary">
            <p className="contact-title">Store</p>
            <p className="small-text">
                <PinIcon className="contact-icon" />
                Company Name
            </p>

            <p className="small-text">
                <PhoneIcon className="contact-icon" />
                0044123123
            </p>
            <p className="small-text">
                <MailIcon className="contact-icon" />
                ex@mail.com
            </p>

            <p className="contact-title">We accept</p>

            <p className="small-text">
                <AmexIcon className="contact-icon" />
                Amex
            </p>
            <p className="small-text">
                <CardIcon className="contact-icon" />
                CreditCard
            </p>

            <div className="icons-container">
                <a href="#fb">
                    <FbIcon className="social-icon" />
                </a>
                <a href="#ig">
                    <IgIcon className="social-icon" />
                </a>
                <a href="#snap">
                    <SnapIcon className="social-icon" />
                </a>
                <a href="#pint">
                    <PrintIcon className="social-icon" />
                </a>
                <a href="#twitt">
                    <TwitterIcon className="social-icon" />
                </a>
                <a href="#link">
                    <LinkedIcon className="social-icon" />
                </a>
            </div>
        </div>
    </Wrapper>
);

export default Contact;
