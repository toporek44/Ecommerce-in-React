import React, { useContext } from 'react';
import Cart from 'components/Cart/Cart';
import MainTemplate from 'components/MainTemplate/MainTemplate';
import TopHeader from 'components/TopHeader/TopHeader';
import OrderDetails from 'components/OrderDetails/OrderDetails';
import Summary from 'components/Summary/Summary';
import { useStep } from 'hooks/useStep';
import { CartContext } from 'providers/CartProvider';
import { OrderStepBar, StepItem } from './CartPage.styles';
import {useForm} from "../../hooks/useForm";
import {initialFormData} from "../../components/OrderDetails/formiInitialValues";

const CartPage =() => {
    const { step, setStep, handleNextStep, handlePrevStep } = useStep();
    const { isProceeded } = useContext(CartContext);
    const useFormData = useForm(initialFormData);

    return (
        <MainTemplate>
            <TopHeader />
            {!isProceeded  ? (
                <OrderStepBar>
                    <StepItem stepActive={step > 1} inProgress={step === 1} onClick={() => (step > 1 ? setStep(1) : null)}>
                        <div className="dot" />
                        <p>Cart</p>
                    </StepItem>
                    <div className="step-line" />
                    <StepItem inProgress={step > 1} stepActive={step > 2} onClick={() => (step > 2 ? setStep(2) : null)}>
                        <div className="dot" />
                        <p>Order Details</p>
                    </StepItem>
                    <div className="step-line" />
                    <StepItem stepActive={step === 3}>
                        <div className="dot" />
                        <p>Summary</p>
                    </StepItem>
                </OrderStepBar>
            ) : null}

            {step === 1 ? <Cart handleNextStep={handleNextStep} /> : null}
            {step === 2 ? <OrderDetails useFormData={useFormData} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} /> : null}
            {step === 3 ? <Summary useFormData={useFormData} handlePrevStep={handlePrevStep} /> : null}
        </MainTemplate>
    );
};

export default CartPage;
