import React from 'react';
import { Wrapper } from './Checkbox.styles';

const Checkbox = ({ handleChange, name, children, checked }) => (
    <Wrapper>
        <label className="checkbox bounce">
            <input type="checkbox" name={name} checked={checked} onChange={handleChange} />
            <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
            </svg>
            <p>{children}</p>
        </label>
    </Wrapper>
);

export default Checkbox;
