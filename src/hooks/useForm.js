import React, { useEffect, useState } from 'react';
import {validateForm} from 'helpers/validateForm';

export const useForm = ( initialFormData = {}, submitFunction: ()=>{} ) => {
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState({});
    const [isSubmitted, setSubmitted] = useState(false);

    const handleChange = (e, rules = {}) => {
        const {required, fieldType = 'text'} = rules;
        const {name, value, type, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: {
                ...prev[name],
                value: type === 'checkbox' ? checked : value,
                required: required || initialFormData[name].required,
                fieldType: fieldType || initialFormData[name].fieldType,
            },
        }));
        setErrors(validateForm(formData, name, value, fieldType));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitted) {
            submitFunction()
        }
    };

    const handleClearForm = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    const handleSkipValidation = (fields, condition) => {
        fields.forEach((field) => {
            if (condition) {
                formData[field].required = true;
            } else {
                formData[field].required = false;
                delete errors[field];
                formData[field].value = '';
            }
        });
    };

    useEffect(() => {
        Object.keys(formData).forEach((name) => {
            if (formData[name].value !== '') setErrors(validateForm(
                formData,
                name,
                formData[name].value,
                formData[name].fieldType,
                formData[name].required
            ));
        });
        handleSkipValidation(['nip', 'companyName'], formData.company.value);
        handleSkipValidation(['cardNumber', 'cardName', 'expireDate', 'cvv'], formData.payment.value === 'card');
        const isError = Object.keys(formData).find((name) => formData[name].value === '' && formData[name].required);
        !isError && Object.keys(errors).length === 0 ? setSubmitted(true) : setSubmitted(false);
    }, [formData, errors]);
    return {
        handleChange,
        handleSubmit,
        handleClearForm,
        setFormData,
        formData,
        isSubmitted,
        setErrors,
        errors,
    };

};
