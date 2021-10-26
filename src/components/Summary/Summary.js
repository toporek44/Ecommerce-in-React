import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button/Button';
import {CartContext} from 'providers/CartProvider';
import {useStep} from 'hooks/useStep';
import {useCart} from 'hooks/useCart';
import {ReactComponent as SuccessIcon} from 'assets/images/successIcon.svg';
import {ReactComponent as Card} from 'assets/images/card.svg';
import {ReactComponent as Bitcoin} from 'assets/images/bitcoin.svg';
import {ReactComponent as Paypal} from 'assets/images/paypal.svg';
import {payments} from 'helpers/constants';
import {Wrapper, SuccessfulMessage, ProductSummaryItem} from './Summary.styles';

const Summary = ({useFormData}) => {
    const {cart, total} = useContext(CartContext);
    const {formData} = useFormData;
    const {handlePrevStep} = useStep();
    const {handleProceed, isProceeded} = useCart();
    const {name, surname, street, country, postcode, city, state, company, nip, payment, companyName} = formData;
    return (
        <>
            {!isProceeded ? (
                <Wrapper>
                    <p className="title">Summary</p>
                    {cart.map(({product_name, productTotal, quantity, id}) => (
                        <ProductSummaryItem key={id}>
                            <div className="container">
                                <p className="name">{product_name}</p>
                                <p className="quantity">Quantity: {quantity}</p>
                            </div>
                            <p className="total-product-price">${productTotal.toFixed(2)}</p>
                        </ProductSummaryItem>
                    ))}

                    <ProductSummaryItem>
                        <p className="name">Total</p>
                        <p className="total-price">${total.toFixed(2)}</p>
                    </ProductSummaryItem>

                    <p className="title">Order Details</p>
                    <p className="detail-title">Name & Surname</p>
                    <p className="detail-value">
                        {name.value} {surname.value}
                    </p>
                    <p className="detail-title">Address</p>
                    <p className="detail-value">
                        {street.value}, {country.value}, {state.value} , {postcode.value} {city.value}
                    </p>
                    {company.value ? (
                        <>
                            <p className="detail-title">NIP</p>
                            <p className="detail-value">{nip.value || '-'}</p>
                            <p className="detail-title">Company Name</p>
                            <p className="detail-value">{company.value ? companyName.value : '-'}</p>
                        </>
                    ) : null}
                    <p className="title">Payment Method</p>
                    <p className="detail-value">{
                        payment.value === payments.CARD ?
                            <Card/>
                            : payment.value === payments.BTC ?
                            <Bitcoin/>
                            : payments.PAYPAL === payment.value ?
                                <Paypal/>
                                : null
                    }
                    </p>
                    <div className="buttons-container">
                        <Button onClick={handlePrevStep}>Back</Button>
                        <Button onClick={handleProceed}>Proceed</Button>
                    </div>
                </Wrapper>
            ) : (
                <SuccessfulMessage>
                    <SuccessIcon/>
                    <p> Order placed successfully!</p>
                    <Button as={Link} to="/">
                        Continue Shopping
                    </Button>
                </SuccessfulMessage>
            )}
        </>
    );
};
export default Summary;
