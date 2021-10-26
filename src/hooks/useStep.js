import React, {useCallback, useContext, useState} from 'react';

const StepContext = React.createContext();

const StepProvider = ({ children }) => {
    const [step, setStep] = useState(1);

    return <StepContext.Provider value={{ step, setStep }}>{children}</StepContext.Provider>;
};
export { StepProvider, StepContext };
export const useStep = () => {
    const { step, setStep } = useContext(StepContext);

    const handleNextStep = useCallback(() => {
        if (step === 3) return;
        setStep((prev) => prev + 1);
    },[]);

    const handlePrevStep = useCallback(() => {
        if (step === 0) return;
        setStep((prev) => prev - 1);
    },[]);

    return {
        step,
        setStep,
        handleNextStep,
        handlePrevStep,
    };
};
