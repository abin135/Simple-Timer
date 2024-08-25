import React from 'react';
import classes from './TextInput.module.css';

const TextInput = ({ value, onChange }) => {
    return (
        <input
        type='number'
        value={value}
        onChange={onChange}
        placeholder="Enter the amount of seconds"
        className={classes.input}
        />
    );
};

export default TextInput;