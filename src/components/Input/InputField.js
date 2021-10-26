import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, ErrorMessage } from './Input.styles';
import { useForm } from '../../hooks/useForm';
import { validateForm } from '../../helpers/validateForm';

export const InputField = ({ value, error, label, placeholder, type, handleChange, name, maxLength }) => (
    <label>
        {label} *
        <Input name={name} placeholder={placeholder} error={error} onChange={handleChange} maxLength={maxLength} value={value} type={type} />
        <ErrorMessage>{error || null}</ErrorMessage>
    </label>
);

export default InputField;
