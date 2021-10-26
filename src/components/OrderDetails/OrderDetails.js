import React from 'react';
import InputField from 'components/Input/InputField';
import Checkbox from 'components/Checkbox/Checkbox';
import {useStep} from 'hooks/useStep';
import {Button} from 'components/Button/Button';
import {ReactComponent as Card} from 'assets/images/card.svg';
import {ReactComponent as Bitcoin} from 'assets/images/bitcoin.svg';
import {ReactComponent as Paypal} from 'assets/images/paypal.svg';
import btcqr from 'assets/images/btcqr.png';
import {payments} from 'helpers/constants';
import {Wrapper, RadioItem, Form, RadioButton} from './OrderDetails.styles';

const OrderDetails = ({useFormData}) => {
    const {handlePrevStep, handleNextStep} = useStep();
    const {formData, handleChange, handleSubmit, errors, isSubmitted} = useFormData;

    const {
        name,
        surname,
        companyName,
        company,
        country,
        nip,
        city,
        state,
        street,
        postcode,
        cardNumber,
        cardName,
        cvv,
        expireDate,
        payment
    } = formData

    const handleExpireDateFormat = () => expireDate.value.replace(
        /[^0-9]/g,
        '', // To allow only numbers
    )
        .replace(
            /^([2-9])$/g,
            '0$1', // To handle 3 > 03
        )
        .replace(
            /^(1)([3-9]{1})$/g,
            '0$1/$2', // 13 > 01/3
        )
        .replace(
            /^0+/g,
            '0', // To handle 00 > 0
        )
        .replace(
            /^([0-1][0-9])([0-9]{1,2}).*/g,
            '$1/$2', // To handle 113 > 11/3
        )


    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <div className="main-container">
                    <div className="shipment-container">
                        <p className="title">Shipment Details </p>
                        <div className="name-container">
                            <InputField
                                label="Name"
                                value={name.value}
                                name="name"
                                handleChange={handleChange}
                                error={errors.name}
                            />
                            <InputField
                                label="Surname"
                                value={surname.value}
                                name="surname"
                                handleChange={handleChange}
                                error={errors.surname}
                            />
                        </div>
                        <Checkbox
                            name="company"
                            checked={company.value}
                            handleChange={(e) => handleChange(e, {
                                fieldType: "company"
                            })}
                        >
                            Company
                        </Checkbox>
                        {company.value ? (
                            <div className="company-details">
                                <InputField
                                    label="NIP"
                                    value={nip.value}
                                    name="nip"
                                    handleChange={(e) => handleChange(e, {
                                        fieldType: "nip",
                                    })}
                                    error={errors.nip}
                                    maxLength={10}
                                />
                                <InputField
                                    label="Company Name"
                                    value={companyName.value}
                                    name="companyName"
                                    handleChange={(e) => handleChange(e, {
                                        fieldType: "textAndNumbers"
                                    })}
                                    error={errors.companyName}
                                />
                            </div>
                        ) : null}
                        <InputField
                            label="Country"
                            value={country.value}
                            name="country"
                            handleChange={handleChange}
                            error={errors.country}
                        />
                        <InputField
                            label="Street Address"
                            value={street.value}
                            name="street"
                            handleChange={(e) => handleChange(e, {
                                fieldType: "textAndNumbers"
                            })}
                            error={errors.street}
                        />
                        <InputField
                            label="Town / City"
                            value={city.value}
                            name="city"
                            handleChange={(e) => handleChange(e, {
                                fieldType: "textAndNumbers"
                            })}
                            error={errors.city}
                        />
                        <InputField
                            label="State"
                            value={state.value}
                            name="state"
                            handleChange={handleChange}
                            error={errors.state}
                        />
                        <InputField
                            label="Postcode"
                            value={postcode.value}
                            name="postcode"
                            handleChange={(e) => handleChange(e, {
                                fieldType: "textAndNumbers",
                            })}
                            error={errors.postcode}
                        />
                    </div>
                    <div className="card-container">
                        <p className="title"> Payments Method</p>
                        <div className="checkbox-container">
                            <RadioItem>
                                <RadioButton
                                    name="payment"
                                    onChange={(e) => handleChange(e, {
                                        fieldType: "payment",
                                        required: false,
                                    })}
                                    id="card"
                                    checked={payment.value === payments.CARD}
                                    value="card"
                                />
                                <label htmlFor="card" className="label">
                                    <Card/>
                                </label>
                            </RadioItem>
                            <RadioItem>
                                <RadioButton
                                    name="payment"
                                    onChange={(e) => handleChange(e, {
                                        fieldType: "payment",
                                        required: false,
                                    })}
                                    id="bitcoin"
                                    checked={payment.value === payments.BTC}
                                    value="bitcoin"
                                />
                                <label className="label" htmlFor="bitcoin">
                                    <Bitcoin/>
                                </label>
                            </RadioItem>
                            <RadioItem>
                                <RadioButton
                                    name="payment"
                                    onChange={(e) => handleChange(e, {
                                        fieldType: "payment",
                                        required: false,
                                    })}
                                    id="paypal"
                                    checked={payment.value === payments.PAYPAL}
                                    value="paypal"
                                />
                                <label className="label" htmlFor="paypal">
                                    <Paypal/>
                                </label>
                            </RadioItem>
                        </div>
                        {payment.value === payments.CARD ? (
                            <>
                                <InputField
                                    label="Card Number"
                                    value={cardNumber.value}
                                    name="cardNumber"
                                    handleChange={(e) => handleChange(e, {
                                        fieldType: 'cardNumber'
                                    })}
                                    error={errors.cardNumber}
                                    maxLength="16"
                                />
                                <InputField
                                    label="Name on card"
                                    value={cardName.value}
                                    name="cardName"
                                    handleChange={handleChange}
                                    error={errors.cardName}
                                />
                                <div className="name-container">
                                    <InputField
                                        label="Expire date"
                                        name="expireDate"
                                        placeholder="01/21"
                                        maxLength={5}
                                        handleChange={(e) => handleChange(e, {
                                            fieldType: "expireDate"
                                        })}
                                        error={errors.expireDate}
                                        value={handleExpireDateFormat()}
                                    />

                                    <InputField
                                        label="CVV"
                                        value={cvv.value}
                                        name="cvv"
                                        handleChange={(e) => handleChange(e, {
                                            fieldType: "cvv"
                                        })}
                                        error={errors.cvv}
                                        type="password"
                                        maxLength="3"
                                        placeholder="_ _ _"
                                    />

                                </div>
                            </>
                        ) : payment.value === payments.BTC ? (
                            <img src={btcqr} alt="btcqr"/>
                        ) : null}
                    </div>
                </div>
                <div className="buttons">
                    <Button type="button" onClick={handlePrevStep}>
                        Back
                    </Button>
                    <Button type="submit" disabled={!isSubmitted} onClick={handleNextStep}>Next</Button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default OrderDetails;
